from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for all origins (or restrict as necessary)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Llama Chatbot API is running"}

@app.post("/generate-response")
async def generate_response(request: Request):
    data = await request.json()
    user_message = data.get("message")

    # Here, integrate with your Llama model (for now, a simple mock response)
    bot_response = f"Mock response to: {user_message}"

    return {"response": bot_response}
