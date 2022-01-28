# a101-bootcamp-odev3-mehmetalicakir

## API Kullanımı

#### Eklenen Ürünleri getir

```
  GET /api/product/
```

#### Ürün Ekle

```
  POST /api/product/
```
Yukarıdaki adrese aşağıdaki örnek standartlarında POST isteği gönderebilirsiniz.

```
{
"stock": 50,
"productName": "Sauce",
"isDiscount": true,
"categoryId": 5,
"categoryName": "Food"
}
```

#### ProductId İle Ürün Getir

```
  GET /api/product/productId/${productId}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId` | `string` | **Gerekli**. İlgili ürünün idsi |


#### İndirimdeki Ürünleri Getir

```
  GET /api/product/discount
```
  
#### Ürün Sil

```
  DELETE /api/product/
```
Yukarıdaki adrese aşağıdaki örnek standartlarında DELETE isteği gönderebilirsiniz.

```
{
"productId": ${productId}
}
```
#### Ürün Stoğunu Güncelle

```
  PUT /api/product/
```
Yukarıdaki adrese aşağıdaki örnek standartlarında PUT isteği gönderebilirsiniz.

```
{
"productId": ${productId},
"stock": 49
}
```


## NoSQL ve SQL Arasındaki Farklar

NoSQL ve SQL arasındaki farkları [buraya](./NoSQL-ve-SQL-Farklar.md) tıklayarak okuyabilirsiniz.
