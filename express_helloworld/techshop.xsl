<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY copy "entity-value">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Online Tech Shop</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f2f2f2;
                    }
                    header {
                        background-color: #333;
                        color: #fff;
                        padding: 10px;
                        text-align: center;
                    }
                    h1 {
                        font-size: 36px;
                        margin: 0;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .product {
                        background-color: #fff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        margin-bottom: 20px;
                        padding: 20px;
                        display: flex;
                        flex-direction: row;
                    }
                    .product img {
                        max-width: 300px;
                        margin-right: 20px;
                    }
                    .product h2 {
                        font-size: 24px;
                        margin-top: 0;
                    }
                    .product p {
                        font-size: 16px;
                        margin: 10px 0;
                    }
                    .product-price {
                        font-size: 24px;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                    footer {
                        background-color: #333;
                        color: #fff;
                        padding: 10px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Online Tech Shop</h1>
                </header>
                <div class="container">
                    <xsl:for-each select="techshop/product">
                        <div class="product">
                            <img src="{image}" alt="{name}"></img>
                            <div class="product-details">
                                <h2>
                                    <xsl:value-of select="name" />
                                </h2>
                                <p>
                                    <xsl:value-of select="description" />
                                </p>
                                <div class="product-price">
                                    <xsl:value-of select="concat('$', format-number(price, '0.00'))" />
                                </div>
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
                <footer>
                    &copy; 2023 Online Tech Shop
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>