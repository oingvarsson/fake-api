var schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 20,
      "maxItems": 30,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "avatar": {
            "type": "image",
            "faker": "image.avatar"
          }
        },
        "required": ["id", "firstName", "lastName", "email", "avatar"]
      }
    }
  },
  "required": ["users"]
};

module.exports = schema;
