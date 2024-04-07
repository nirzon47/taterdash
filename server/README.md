# taterdash-backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## API Documentation

# TaterDash

# 📁 Folder: User

## End-point: Registration

### Method: POST

> ```
> /api/v1/users/register
> ```

### Body (**raw**)

```json
{
	"firstName": "John",
	"lastName": "Doe",
	"email": "nirzon.web.dev@gmail.com",
	"password": "",
	"role": "admin"
}
```

### Response: 201

```json
{
	"success": true,
	"message": "User created successfully",
	"user": {
		"firstName": "John",
		"lastName": "Doe",
		"email": "nirzon.web.dev@gmail.com",
		"password": "removed for security",
		"role": "admin",
		"tokens": [],
		"_id": "660963ee88f6763a5fec65e7",
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Method: POST

> ```
> /api/v1/users/login
> ```

### Body (**raw**)

```json
{
	"email": "nirzon.web.dev@gmail.com",
	"password": ""
}
```

### Response: 200

```json
{
	"success": true,
	"message": "User logged in successfully",
	"token": "removed for security"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Logout

### Method: POST

> ```
> /api/v1/users/logout
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                                                                                                            | Type   |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjEwZjdhOGZmOWViYTIzNmM1M2FkMGQiLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJVc2VyIiwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwicm9sZSI6InVzZXIiLCJleHAiOjE3MTI5OTMzNzAsImlhdCI6MTcxMjM4ODU3MH0.0-KCyAfr63A-GUtDn2dK2hlyA3RFnLM-QXIl19HNBlQ | string |

### Response: 200

```json
{
	"success": true,
	"message": "User logged out successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Address

## End-point: Add Address

### Method: POST

> ```
> /api/v1/users/address
> ```

### Body (**raw**)

```json
{
	"street": "Street",
	"city": "City",
	"state": "State",
	"zip": 123,
	"country": "Country"
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Address added successfully",
	"data": {
		"street": "Street",
		"city": "City",
		"state": "State",
		"zip": 123,
		"country": "Country"
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Address

### Method: PATCH

> ```
> /api/v1/users/address
> ```

### Body (**raw**)

```json
{
	"street": "Street",
	"state": "State",
	"zip": 1234,
	"country": "Country"
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Address updated successfully",
	"data": {
		"street": "Street",
		"city": "City",
		"state": "State",
		"zip": 1234,
		"country": "Country"
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Address

### Method: GET

> ```
> /api/v1/users/address
> ```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Address fetched successfully",
	"data": {
		"street": "Street",
		"city": "City",
		"state": "State",
		"zip": 123,
		"country": "Country"
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Restaurants

## End-point: Add Restaurant

### Method: POST

> ```
> /api/v1/restaurant
> ```

### Body (**raw**)

```json
{
	"name": "WOW! Momo",
	"cuisine": "Momos, Fast Food, Chinese",
	"rating": 4.1,
	"deliveryTimeInMinutes": 23
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 201

```json
{
	"success": true,
	"message": "Restaurant added successfully",
	"restaurant": {
		"name": "KFC - Kentucky Fried Chicken",
		"cuisine": ["Fast Food", "Southern American", "Fried Chicken"],
		"imagePath": "uploads/default.png",
		"categories": [],
		"_id": "660bb7418127cd0b03ec5669",
		"createdAt": "2024-04-02T07:44:01.728Z",
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Restaurants

### Method: GET

> ```
> /api/v1/restaurant/
> ```

### Response: 200

```json
{
	"success": true,
	"message": "Restaurants fetched successfully",
	"data": [
		{
			"_id": "660a7fd368da6f9e0717e7c4",
			"name": "KFC",
			"cuisine": ["Fast Food", "Southern American", "Fried Chicken"],
			"imagePath": "uploads/KFC-_h88kurn2BRDsFfokoF7w.png",
			"categories": [],
			"createdAt": "2024-04-01T09:35:15.268Z",
			"__v": 0
		}
	]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Restaurant Details

### Method: GET

> ```
> /api/v1/restaurant/:restaurantId
> ```

### Response: 200

```json
{
	"success": true,
	"message": "Restaurants fetched successfully",
	"data": [
		{
			"_id": "660a7fd368da6f9e0717e7c4",
			"name": "KFC",
			"cuisine": ["Fast Food", "Southern American", "Fried Chicken"],
			"imagePath": "uploads/KFC-_h88kurn2BRDsFfokoF7w.png",
			"categories": [],
			"createdAt": "2024-04-01T09:35:15.268Z",
			"__v": 0
		}
	]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Restaurant

### Method: PATCH

> ```
> /api/v1/restaurant/:restaurantId
> ```

### Body (**raw**)

```json
{
	"cuisine": "Fast Food, Southern American"
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Restaurant updated successfully",
	"data": {
		"_id": "660a7fd368da6f9e0717e7c4",
		"name": "KFC - Kentucky Fried Chicken",
		"cuisine": ["Fast Food", "Southern American"],
		"imagePath": "uploads/KFC-_h88kurn2BRDsFfokoF7w.png",
		"categories": [
			{
				"name": "default",
				"items": [
					{
						"name": "Fried Wings",
						"price": 250,
						"_id": "660ab0a6b92551cc68388830"
					},
					{
						"name": "Fried Thighs",
						"price": 300,
						"_id": "660ab0e3b92551cc68388849"
					}
				],
				"_id": "660ab0a6b92551cc6838882f"
			},
			{
				"name": "Combo",
				"items": [
					{
						"name": "Fried Wings + Fried Drumstick + Cola (300ml)",
						"price": 550,
						"_id": "660ab0cdb92551cc6838883b"
					}
				],
				"_id": "660ab0cdb92551cc6838883a"
			}
		],
		"createdAt": "2024-04-01T09:35:15.268Z",
		"__v": 3
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Restaurant Image

### Method: PATCH

> ```
> /api/v1/restaurant/:restaurantID/image
> ```

### Body formdata

| Param | value                             | Type |
| ----- | --------------------------------- | ---- |
| image | /C:/Users/nirzo/Downloads/KFC.png | file |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Image updated successfully",
	"data": {
		"_id": "660a7fd368da6f9e0717e7c4",
		"name": "KFC",
		"cuisine": ["Fast Food", "Southern American", "Fried Chicken"],
		"imagePath": "uploads/KFC-_h88kurn2BRDsFfokoF7w.png",
		"categories": [],
		"createdAt": "2024-04-01T09:35:15.268Z",
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Restaurant

### Method: DELETE

> ```
> /api/v1/restaurant/:restaurantId
> ```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Restaurant deleted successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Items

## End-point: Add Item

### Method: POST

> ```
> /api/v1/item/:restaurantId
> ```

### Body (**raw**)

```json
{
	"name": "Krushers",
	"price": 150,
	"category": "Beverages"
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 201

```json
{
	"success": true,
	"item": {
		"category": "660c0240b579e40d2ac1f645",
		"name": "Krushers",
		"price": 150,
		"_id": "660c0240b579e40d2ac1f649",
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Item

### Method: PATCH

> ```
> /api/v1/item/:itemId
> ```

### Body (**raw**)

```json
{
	"price": 90
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Item updated successfully",
	"data": {
		"_id": "660be825259a37fa66401dd1",
		"category": "660bdefc5366ddde8bec1008",
		"name": "Cola 600ml",
		"price": 90,
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Item

### Method: DELETE

> ```
> /api/v1/item/:itemId
> ```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Cart

## End-point: Add to Cart

### Method: POST

> ```
> /api/v1/cart/
> ```

### Body (**raw**)

```json
{
	"itemId": "66119e196f3e2225410e32a0",
	"restaurantId": "6611914b6f3e2225410e2e43",
	"quantity": 1
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                                                                                                                           | Type   |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBmZGMzOTc1NWQ3MDhmYzQ0MDcwYzkiLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJlbWFpbCI6Im5pcnpvbi53ZWIuZGV2QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTcxMzEwMjkxMiwiaWF0IjoxNzEyNDk4MTEyfQ.H6vixL2ecelgdRitvBtZc1KV8DJEZzgtmOxSbX9AgIY | string |

### Response: 200

```json
{
	"success": true,
	"message": "Item added to cart successfully",
	"cart": {
		"user": "66096e318098dafcdeec7c2c",
		"restaurant": "660bb7418127cd0b03ec5669",
		"items": [
			{
				"item": "660bdefc5366ddde8bec100c",
				"quantity": 1,
				"_id": "660c08633c6bcb98cbc8880f"
			}
		],
		"_id": "660c08633c6bcb98cbc8880e",
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Cart

### Method: GET

> ```
> /api/v1/cart/
> ```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"cart": {
		"_id": "660c1483cf43d04f10958460",
		"user": "66096e318098dafcdeec7c2c",
		"restaurant": "660bb7418127cd0b03ec5669",
		"items": [
			{
				"item": {
					"_id": "660bdefc5366ddde8bec100c",
					"category": "660bdefc5366ddde8bec1008",
					"name": "Hot and Crispy Wings",
					"price": 170,
					"__v": 0
				},
				"quantity": 4,
				"_id": "660c1483cf43d04f10958461"
			}
		],
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Quantity

### Method: PATCH

> ```
> /api/v1/cart/
> ```

### Body (**raw**)

```json
{
	"itemId": "660bdefc5366ddde8bec100c",
	"quantity": 4
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Quantity updated successfully",
	"cart": {
		"_id": "660c1483cf43d04f10958460",
		"user": "66096e318098dafcdeec7c2c",
		"restaurant": "660bb7418127cd0b03ec5669",
		"items": [
			{
				"item": "660bdefc5366ddde8bec100c",
				"quantity": 4,
				"_id": "660c1483cf43d04f10958461"
			}
		],
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete from Cart

### Method: DELETE

> ```
> /api/v1/cart/
> ```

### Body (**raw**)

```json
{
	"itemId": "660bdefc5366ddde8bec100c"
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Item deleted from cart successfully",
	"cart": {
		"_id": "660c1483cf43d04f10958460",
		"user": "66096e318098dafcdeec7c2c",
		"restaurant": "660bb7418127cd0b03ec5669",
		"items": [],
		"__v": 0
	}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Order

## End-point: Checkout

### Method: POST

> ```
> /api/v1/checkout
> ```

### Body (**raw**)

```json
{
	"paymentMethod": "online",
	"coupon": null
}
```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"message": "Order placed successfully",
	"order": {
		"items": [
			{
				"item": "660bdefc5366ddde8bec100c",
				"quantity": 1
			}
		],
		"total": 170,
		"address": {
			"street": "Street",
			"city": "City",
			"state": "State",
			"zip": 123,
			"country": "Country"
		},
		"status": "pending",
		"paymentId": "order_NtrEbzWa2aU7Fp"
	},
	"orderId": "660c5140e3b6a6a84feec61a"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Order history

### Method: GET

> ```
> /api/v1/checkout/history
> ```

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Response: 200

```json
{
	"success": true,
	"orders": [
		{
			"_id": "660c5140e3b6a6a84feec61a",
			"user": "66096e318098dafcdeec7c2c",
			"orders": [
				{
					"address": {
						"street": "Street",
						"city": "City",
						"state": "State",
						"zip": "123",
						"country": "Country"
					},
					"items": [
						{
							"item": {
								"_id": "660bdefc5366ddde8bec100c",
								"category": "660bdefc5366ddde8bec1008",
								"name": "Hot and Crispy Wings",
								"price": 170,
								"__v": 0
							},
							"quantity": 1,
							"_id": "660c5140e3b6a6a84feec61d"
						}
					],
					"total": 170,
					"status": "pending",
					"paymentId": "order_Ntr9Bxk74r0zoq",
					"_id": "660c5140e3b6a6a84feec61c",
					"created": "2024-04-02T18:41:04.440Z"
				}
			],
			"__v": 0
		}
	]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
