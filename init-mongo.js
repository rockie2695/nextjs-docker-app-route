db.createUser(
    {
        user: "test_user",
        pwd: "test_password",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);
// db.createCollection("test"); //MongoDB creates the database when you first store data in that database