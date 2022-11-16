## POST /

Request

```json
{
  "name": "Nandang",
  "permission": "admin"
}
```

Response

```json
{
  "message": "Created",
  "data": {
    "id": 1,
    "name": "Nandang",
    "permission": "admin",
    "createdAt": "2022-11-12T11:13:31.984Z",
    "updatedAt": "2022-11-12T11:13:31.984Z"
  }
}
```

## GET /

Response

```json
{
  "message": "OK",
  "data": [
    {
      "id": 1,
      "name": "Nandang",
      "permission": "admin"
      "createdAt": "2022-11-12T11:13:31.984Z",
      "updatedAt": "2022-11-12T11:13:31.984Z"
    }
  ]
}
```

## GET /:id => 10

Response

```json
{
  "message": "OK",
  "data": {
    "id": 1,
    "name": "Nandang",
    "permission": "admin",
    "createdAt": "2022-11-12T11:13:31.984Z",
    "updatedAt": "2022-11-12T11:13:31.984Z"
  }
}
```

## PUT /:id => 1

Request

```json
{
  "permission": "user"
}
```

Response

```json
{
  "message": "Terupdate"
}
```

## DELETE /:id => 1

Response

```json
{
  "message": "Terhapus"
}
```
