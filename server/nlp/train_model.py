import pickle
from processor import preprocess_text
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Sample training data (You can replace this with your real chatbot dataset)
training_data = [
    ("hi", "greeting"),
    ("hello", "greeting"),
    ("how are you", "greeting"),
    ("bye", "goodbye"),
    ("goodbye", "goodbye"),
    ("i want pizza", "order_pizza"),
    ("order food", "order_food"),
]

texts = [preprocess_text(text) for text, label in training_data]
labels = [label for text, label in training_data]

# Vectorize
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Train model
model = LogisticRegression()
model.fit(X, labels)

# Save the model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Save the vectorizer
with open('vectorizer.pkl', 'wb') as f:
    pickle.dump(vectorizer, f)

print("✅ Model and vectorizer saved successfully.")