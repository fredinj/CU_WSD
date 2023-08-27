from lxml import etree

xml_tree = etree.parse("employee_data.xml")

xsl_transform = etree.XSLT(etree.parse("transform.xsl"))

html_tree = xsl_transform(xml_tree)

xmlschema = etree.XMLSchema(etree.parse("employee_schema.xsd"))
if xmlschema.validate(xml_tree):
    print("XML is valid against XSD.")
else:
    print("XML is not valid against XSD.")
    exit(1)

with open("output.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))