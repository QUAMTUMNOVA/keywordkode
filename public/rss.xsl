<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <html>
      <head>
        <title>KeywordKode Blog RSS Feed</title>
        <style>
          body { font-family: Arial, sans-serif; background: #0d0d1a; color: #e0e0e0; padding: 2rem; }
          h1 { color: #00ff99; }
          .post { margin-bottom: 2rem; }
          a { color: #00ccff; text-decoration: none; font-size: 1.2rem; }
          a:hover { text-decoration: underline; }
          .date { font-size: 0.9rem; color: #999; margin-top: 0.2rem; }
          .desc { font-size: 1rem; margin-top: 0.4rem; }
        </style>
      </head>
      <body>
        <h1>KeywordKode Blog Feed</h1>
        <xsl:for-each select="rss/channel/item">
          <div class="post">
            <a href="{link}"><xsl:value-of select="title"/></a>
            <div class="date"><xsl:value-of select="pubDate"/></div>
            <div class="desc"><xsl:value-of select="description"/></div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
