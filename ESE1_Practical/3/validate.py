from lxml import etree

xml=etree.parse("./xml_data.xml")
xsd=etree.XMLSchema(etree.parse("./xml_schema.xsd"))

try:
    xsd.assertValid(xml)
    print("XML is valid against schema")
except etree.DocumentInvalid as e:
    print("Invalid XML: ",e)