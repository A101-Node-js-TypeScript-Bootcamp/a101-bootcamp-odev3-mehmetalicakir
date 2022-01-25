# a101-bootcamp-odev3-mehmetalicakir


A→ 1) Products tablosuna ürün ekleyen bir POST endpointi yazınız.
Product tablosunda olması gereken alanlar;
{
productId: string’,
stock: number,
productName: string,
isDiscount: boolean,
category: {
categoryId: number,
categoryName: string,
}
}
2) Eklenen tüm ürünleri getiren bir GET endpointi yazınız.
2a) Tüm ürünlerin içerisinden productId ye göre query params ile filtre yapılacak şekilde bir
endpoint yazınız.
2b) Tüm ürünlerin içerisinden üzerinde discount olan ürünlere göre filtre yapacak bir
endpoint yazınız.
3) productId si ile herhangi bir product ı silecek bir DELETE endpointi yazınız.(üzerinde
isDiscount olan herhangi bir product silinmemeli hata dönmeli)
4) Herhangi bi product ın stoğunu değiştirecek bir UPDATE servisi yazınız.


B→ Ayrıca NoSQL ve SQL arasındaki farkları anlattığınız bir yazı yazınız.
