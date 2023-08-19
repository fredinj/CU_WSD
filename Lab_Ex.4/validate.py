from lxml import etree

def validate_xml(xml_file, xsd_file):
    try:
        xml_doc = etree.parse(xml_file)
        xsd_doc = etree.parse(xsd_file)
        
        schema = etree.XMLSchema(xsd_doc)
        schema.assertValid(xml_doc)
        print("Validation successful: No errors found.")
    except etree.DocumentInvalid as e:
        print("Validation error:", e)

xml_file_path = "employees.xml"
xsd_file_path = "employee_schema.xsd"

validate_xml(xml_file_path, xsd_file_path)
