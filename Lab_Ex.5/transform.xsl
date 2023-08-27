<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Employee List</title>
      </head>
      <body>
        <h1>Employee List</h1>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          <xsl:for-each select="EMPLOYEES/EMPLOYEE">
            <tr>
              <td><xsl:value-of select="concat(personal_info/first_name,' ',personal_info/last_name)"/></td>
              <td><xsl:value-of select="employee_info/position"/></td>
              <td><xsl:value-of select="employee_info/salary"/></td>
              <td><xsl:value-of select="contact_info/contact_number"/></td>
              <td><xsl:value-of select="contact_info/email"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>