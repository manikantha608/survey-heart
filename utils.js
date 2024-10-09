// This project involves building a *Sales Lead Management System* with several collections in a MongoDB database and API endpoints for various operations. Here's a breakdown of the task:

// ### 1. *Agents Collection*
//    - *Info*: Agents will have the following fields:
//      - Name
//      - Email
//      - Phone
//      - Company ID
//    - *API*: Create an API to allow the creation of new agents.
//      - *POST /agents*: This API will accept agent details in the request body and insert them into the database.

// ### 2. *Products Collection*
//    - *Info*: Products for sale will have the following fields:
//      - Product Name
//      - Product Price
//      - Product Image (optional)
//      - Product Description
//    - *API*: Create an API to manage products.
//      - *POST /products*: This API will allow adding new products into the system.

// ### 3. *Leads Collection*
//    - *Info*: Leads collected for potential customers will have the following fields:
//      - Name
//      - Email
//      - Phone Number
//      - Age
//      - City
//      - State
//      - Country
//      - Pincode
//      - Agent ID (to track which agent the lead is assigned to)
//    - *API*: Create an API to generate leads.
//      - *POST /leads*: This API will allow the creation of new leads with associated agent details.

// ### 4. *Sales Collection*
//    - *Info*: Sales will track the transactions made by an agent on a specific lead. A sale can include multiple products but must be tied to a single lead. The sale will contain:
//      - Lead (reference to a lead that has been assigned to the agent)
//      - Products Sold (list of products sold in this sale)
//      - Sale Date
//    - *API*:
//      - *POST /sales*: This API will allow an agent to record a sale made on a lead. It will ensure that only one sale is created per lead.
     
// ### 5. *Sales Summary API*
//    - *Info*: This API will return all sales made by a particular agent and calculate the total amount for all sales.
//    - *API*: 
//      - *GET /sales/agent/:agent_email*: This API will fetch all sales for the given agent, along with the total amount of sales they have made.

// ### Steps for Implementation:
// 1. *Database Design (MongoDB)*:
//    - Agents, Products, Leads, and Sales will be different collections.
//    - Leads will have a reference to an agent, and Sales will have a reference to both the lead and the products.

// 2. *API Development*:
//    - Use Node.js and Express.js to create the RESTful APIs.
//    - Define POSTMAN requests for each API (such as adding an agent, creating a product, generating leads, and fetching sales).

// 3. *POSTMAN Requests*:
//    - *POST /agents*: To add a new agent, send the agent's details (name, email, phone, company ID) in the body.
//    - *POST /products*: To add a product, send the product name, price, image (optional), and description.
//    - *POST /leads*: To add a lead, send the lead's details (name, contact info, address, and assigned agent).
//    - *POST /sales*: To create a sale, send the lead, products sold, and other relevant sale information.
//    - *GET /sales/agent/:agent_email*: To get all sales by an agent and calculate the total sales amount, pass the agent’s email as a parameter.

// By building and testing the API using POSTMAN, you will ensure that all endpoints work correctly and efficiently.

// Would you like help with writing the POSTMAN request examples or further explanations on any part?
// password : Q7rEzQ44SJp2PQEt