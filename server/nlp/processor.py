import re
import nltk
from nltk.stem import WordNetLemmatizer

# Download necessary resources (only once)
nltk.download('punkt')
nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()

def preprocess_text(text):
    """
    Cleans, tokenizes, and lemmatizes the input text.
    Args:
        text (str): The input user query.
    Returns:
        str: Cleaned and preprocessed text.
    """
    # Lowercase the text
    text = text.lower()
    
    # Remove punctuation and special characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    
    # Tokenize the text
    tokens = nltk.word_tokenize(text)
    
    # Lemmatize each word
    lemmatized_tokens = [lemmatizer.lemmatize(token) for token in tokens]
    
    # Join tokens back into a single string
    processed_text = ' '.join(lemmatized_tokens)
    
    return processed_text
