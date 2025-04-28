from processor import preprocess_text
import pickle
import sys

# Load trained ML model and vectorizer
with open('nlp/model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('nlp/vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

def predict_intent(text):
    # Preprocess
    processed_input = preprocess_text(text)

    # Vectorize
    X = vectorizer.transform([processed_input])

    # Predict
    predicted_intent = model.predict(X)[0]

    return predicted_intent

if __name__ == "__main__":
    # Read user input from stdin
    user_input = input().strip()
    # Predict and output
    intent = predict_intent(user_input)
    print(intent)