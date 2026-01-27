<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Quotely Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          * {
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #030712 0%, #0a1628 100%);
            color: #e2e8f0;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }
          .logo-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #06b6d4, #14b8a6);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 24px;
            color: white;
            box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
          }
          .logo-text {
            font-size: 28px;
            font-weight: 700;
            color: white;
          }
          h1 {
            font-size: 36px;
            font-weight: 800;
            margin: 0 0 10px 0;
            background: linear-gradient(135deg, #06b6d4, #14b8a6, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .subtitle {
            color: #94a3b8;
            font-size: 18px;
            margin: 0;
          }
          .stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 30px;
            flex-wrap: wrap;
          }
          .stat {
            text-align: center;
          }
          .stat-value {
            font-size: 32px;
            font-weight: 700;
            color: #06b6d4;
          }
          .stat-label {
            font-size: 14px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(255,255,255,0.03);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.1);
          }
          th {
            background: rgba(6, 182, 212, 0.1);
            color: #06b6d4;
            font-weight: 600;
            text-align: left;
            padding: 16px 20px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          td {
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover {
            background: rgba(6, 182, 212, 0.05);
          }
          a {
            color: #06b6d4;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
          }
          a:hover {
            color: #22d3ee;
            text-decoration: underline;
          }
          .priority {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
          }
          .priority-high {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
          }
          .priority-medium {
            background: rgba(6, 182, 212, 0.2);
            color: #06b6d4;
          }
          .priority-low {
            background: rgba(100, 116, 139, 0.2);
            color: #94a3b8;
          }
          .changefreq {
            color: #64748b;
            font-size: 14px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: #64748b;
            font-size: 14px;
          }
          .footer a {
            color: #94a3b8;
          }
          @media (max-width: 768px) {
            .container {
              padding: 20px 15px;
            }
            h1 {
              font-size: 28px;
            }
            .stats {
              gap: 20px;
            }
            th, td {
              padding: 12px 15px;
              font-size: 14px;
            }
            .hide-mobile {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">
              <div class="logo-icon">Q</div>
              <span class="logo-text">Quotely</span>
            </div>
            <h1>XML Sitemap</h1>
            <p class="subtitle">This sitemap contains all indexable pages on quotely.info</p>
            <div class="stats">
              <div class="stat">
                <div class="stat-value">
                  <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                </div>
                <div class="stat-label">Total URLs</div>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th class="hide-mobile">Priority</th>
                <th class="hide-mobile">Change Frequency</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="hide-mobile">
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.8">
                        <span class="priority priority-high">
                          <xsl:value-of select="sitemap:priority"/>
                        </span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.5">
                        <span class="priority priority-medium">
                          <xsl:value-of select="sitemap:priority"/>
                        </span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority priority-low">
                          <xsl:value-of select="sitemap:priority"/>
                        </span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="hide-mobile">
                    <span class="changefreq">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <div class="footer">
            <p>Generated for <a href="https://quotely.info">Quotely.info</a> - Insurance Quote Comparison Platform</p>
            <p>Learn more about <a href="https://www.sitemaps.org/" target="_blank" rel="noopener">XML Sitemaps</a></p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
