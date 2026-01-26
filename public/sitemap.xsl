<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>Sitemap - Quotely</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%);
            min-height: 100vh;
            color: #e5e5e5;
            line-height: 1.6;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
          }

          header {
            text-align: center;
            margin-bottom: 50px;
            padding: 40px;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            border-radius: 20px;
            border: 1px solid #333;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          }

          .logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .logo-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            font-weight: bold;
            color: #0a0a0f;
          }

          .logo-text {
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(135deg, #eab308 0%, #fbbf24 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          h1 {
            font-size: 28px;
            color: #fff;
            margin-bottom: 10px;
          }

          .subtitle {
            color: #888;
            font-size: 16px;
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
            padding: 20px 30px;
            background: rgba(234, 179, 8, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(234, 179, 8, 0.2);
          }

          .stat-number {
            font-size: 36px;
            font-weight: 700;
            color: #eab308;
          }

          .stat-label {
            font-size: 14px;
            color: #888;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .section {
            margin-bottom: 40px;
          }

          .section-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #333;
          }

          .section-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          }

          h2 {
            font-size: 22px;
            color: #fff;
          }

          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: #16213e;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          }

          th {
            background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
            color: #eab308;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
            padding: 18px 20px;
            text-align: left;
            border-bottom: 2px solid #eab308;
          }

          td {
            padding: 16px 20px;
            border-bottom: 1px solid #2a2a4a;
            vertical-align: middle;
          }

          tr:last-child td {
            border-bottom: none;
          }

          tr:hover td {
            background: rgba(234, 179, 8, 0.05);
          }

          a {
            color: #60a5fa;
            text-decoration: none;
            transition: all 0.2s ease;
            font-weight: 500;
          }

          a:hover {
            color: #eab308;
            text-decoration: underline;
          }

          .url-cell {
            max-width: 500px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .priority {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 50px;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
          }

          .priority-high {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            color: #fff;
          }

          .priority-medium {
            background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
            color: #0a0a0f;
          }

          .priority-low {
            background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
            color: #fff;
          }

          .frequency {
            display: inline-block;
            padding: 4px 10px;
            background: rgba(96, 165, 250, 0.1);
            border: 1px solid rgba(96, 165, 250, 0.3);
            border-radius: 6px;
            font-size: 12px;
            color: #60a5fa;
            text-transform: capitalize;
          }

          .date {
            color: #888;
            font-size: 14px;
          }

          footer {
            text-align: center;
            margin-top: 60px;
            padding: 30px;
            color: #666;
            font-size: 14px;
          }

          footer a {
            color: #eab308;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            background: rgba(234, 179, 8, 0.1);
            border: 1px solid rgba(234, 179, 8, 0.3);
            border-radius: 6px;
            font-size: 11px;
            color: #eab308;
            margin-left: 10px;
          }

          @media (max-width: 768px) {
            .container {
              padding: 20px 15px;
            }

            header {
              padding: 25px;
            }

            .stats {
              gap: 20px;
            }

            .stat {
              padding: 15px 20px;
            }

            th, td {
              padding: 12px 10px;
              font-size: 13px;
            }

            .url-cell {
              max-width: 200px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="logo">
              <div class="logo-icon">Q</div>
              <span class="logo-text">Quotely</span>
            </div>
            <h1>XML Sitemap</h1>
            <p class="subtitle">AI-Powered Insurance Quoting Platform</p>

            <div class="stats">
              <div class="stat">
                <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                <div class="stat-label">Total URLs</div>
              </div>
              <div class="stat">
                <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/blog/')])"/></div>
                <div class="stat-label">Blog Posts</div>
              </div>
              <div class="stat">
                <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></div>
                <div class="stat-label">High Priority</div>
              </div>
            </div>
          </header>

          <div class="section">
            <div class="section-header">
              <div class="section-icon">&#128196;</div>
              <h2>All Pages</h2>
              <span class="badge">&#10003; SEO Optimized</span>
            </div>

            <table>
              <thead>
                <tr>
                  <th style="width: 50%;">URL</th>
                  <th style="width: 15%;">Priority</th>
                  <th style="width: 15%;">Frequency</th>
                  <th style="width: 20%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                  <tr>
                    <td class="url-cell">
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.8">
                          <span class="priority priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority >= 0.5">
                          <span class="priority priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <span class="frequency"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                    <td class="date">
                      <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer>
            <p>Generated by <a href="https://tryquotely.com">Quotely</a> &#8226; <a href="https://tryquotely.com/blog">Visit our Blog</a> &#8226; <a href="https://tryquotely.com/demo-request">Request a Demo</a></p>
            <p style="margin-top: 10px; color: #555;">This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs for search engine indexing.</p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
