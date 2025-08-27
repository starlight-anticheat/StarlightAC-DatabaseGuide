# StarLight Anticheat v5
**How to setup my database**

Welcome to the official **StarLight Anticheat v5 setup guide**! This guide will take you step by step from creating your database, setting up your Vercel project from GitHub, adding environment variables, and integrating your database into StarLightAC.

---

## **1️⃣ Create Your Database**

StarLightAC uses MongoDB to store persistent bans.

### **Step 1: Create a MongoDB Atlas Account**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2. Click **"Build a Cluster"** and select **Free Tier**.
3. Choose your cloud provider and region.
4. Wait for the cluster to be deployed (usually a few minutes).

### **Step 2: Create a Database and Collection**

1. Once your cluster is ready, click **Collections**.
2. Create a new database: `starlightAC`
3. Create a collection: `bans`

### **Step 3: Create a Database User**

1. Go to **Database Access** → **Add New Database User**.
2. Give the user a username and password.
3. Set **Read and write to any database** permissions.
4. Save the user credentials.

### **Step 4: Get Your Connection String**

1. Go to **Clusters** → **Connect** → **Connect your application**.
2. Copy the URI, which looks something like:

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/starlightAC?retryWrites=true&w=majority
```

3. Replace `<username>` and `<password>` with your database user credentials.

---

## 2️⃣ **Set Up Vercel Project from GitHub**

### Step 1: Import the StarLightAC Repository

1. Go to Vercel and log in.
2. Click New Project → Import Git Repository.
3. Copy this repository onto your account (by forking it)
4. Import the repository to vercel
5. Set the Root Directory to `main`.
6. Click Deploy.

### Step 2: Add Environment Variables

1. In your Vercel project, go to Settings → Environment Variables.
Add the following variables:
```
MONGO_URI → Your MongoDB connection string from Step 1.

DISCORD_WEBHOOK → Your optional Discord webhook URL.
```
Make sure to add them to Production (and Preview if needed).

### Step 3: Deploy Changes
Every time you push changes to GitHub, Vercel will automatically deploy the latest version.




Congratulations! 🎉
You now haves et up a database for StarLight Anticheat v5 so your bans are saved.

For any issues or updates, visit the Aztherix Software Documentation.

© 2025 Aztherix Software - All rights reserved

