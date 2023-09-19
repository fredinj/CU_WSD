from lxml import etree

xml=etree.parse("./xml_data.xml")
xsd=etree.XMLSchema(etree.parse("./xml_schema.xsd"))
xsl=etree.XSLT(etree.parse("./xml_stylesheet.xslt"))

try:
    xsd.assertValid(xml)
    print("XML is valid against schema")
    html=xsl(xml)
    with open("./output.html", "bw") as output:
        output.write(etree.tostring(html, pretty_print=True))
        
except etree.DocumentInvalid as e:
    print("Invalid XML: ",e)