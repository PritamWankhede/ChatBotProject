# Support Agent Chatbot for CDP

This project is a chatbot built to assist users in answering "how-to" questions related to four Customer Data Platforms (CDPs): **Segment**, **mParticle**, **Lytics**, and **Zeotap**. The chatbot retrieves and presents relevant documentation from the official sites to guide users on how to perform various tasks or achieve specific outcomes within each platform.

## Features

- **Answer "How-to" Questions:** The chatbot can answer questions such as:
  - "How do I set up a new source in Segment?"
  - "How can I create a user profile in mParticle?"
  - "How do I build an audience segment in Lytics?"
  - "How can I integrate my data with Zeotap?"
  
- **Fetch Information from Documentation:** The chatbot retrieves information from official documentation to provide users with the necessary steps or instructions.

- **Handle Variations in Questions:** It understands different phrasings and can handle both short and long queries.

- **Bonus Features:**
  - **Cross-CDP Comparisons**: The chatbot compares functionalities and processes between CDPs.
  - **Advanced "How-to" Questions**: The chatbot can answer more complex and platform-specific questions.

## Technology Stack

### Frontend
- **React.js**: Used for building the UI and managing the state of the chatbot.
- **JavaScript/JSX**: The primary language for building the components.
- **CSS**: Used for styling components and making the UI responsive.
- **Axios**: For making HTTP requests to the backend.

### Backend
- **Node.js**: The backend server built using Node.js.
- **Express.js**: A framework used to set up routing and handle HTTP requests.
- **Cheerio**: A package used to scrape and parse HTML content from documentation sites.

### Algorithms and Data Structures (DSA)
- **Searching Algorithms**: The chatbot uses search algorithms to efficiently search for relevant documentation based on the user query.
- **String Matching**: The chatbot uses techniques like regular expressions and string matching to handle different question formats and variations.
- **API Integration**: It uses an API-centric architecture to connect the frontend with the backend to fetch the necessary data.
- **Data Parsing**: Data parsing techniques are employed to extract relevant content from web scraping and display it to the user in a readable format.

## How It Works

1. **Frontend:**
   - The user interacts with the chatbot via the web interface built with React.js.
   - The user inputs their query (e.g., "How do I set up a new source in Segment?").
   - React components capture the input and send a request to the backend via an HTTP call (using Axios).

2. **Backend:**
   - The backend receives the user query and identifies which CDP it belongs to (Segment, mParticle, Lytics, or Zeotap).
   - Using Cheerio, the backend scrapes the relevant documentation from the official websites of the CDPs.
   - The chatbot processes the documentation and returns the most relevant content in response to the user's question.
