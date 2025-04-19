from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import spacy

# Initialize FastAPI
app = FastAPI()

# Load NLP model (install first: python -m spacy download en_core_web_sm)
nlp = spacy.load("en_core_web_sm")

# Request model
class UserMessage(BaseModel):
    text: str

# Health check endpoint
@app.get("/")
async def health_check():
    return {"status": "OK", "service": "Food Chatbot NLP"}

# Main processing endpoint
@app.post("/process")
async def process_message(message: UserMessage):
    try:
        doc = nlp(message.text.lower())
        
        # Extract entities
        entities = {
            "diet": None,
            "budget": None,
            "intent": "unknown"
        }

        # Check for dietary preferences
        for token in doc:
            if token.text in ["vegan", "vegetarian", "gluten-free"]:
                entities["diet"] = token.text
            if token.like_num and "under" in message.text:
                entities["budget"] = float(token.text)

        # Determine intent
        if any(word in message.text.lower() for word in ["find", "search", "recommend"]):
            entities["intent"] = "find_food"
        elif "order" in message.text.lower():
            entities["intent"] = "place_order"

        return {
            "original_text": message.text,
            "entities": entities
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Add CORS middleware if needed
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/process")
async def process_message(text: str):
    return {"message": f"Processed: {text}"}