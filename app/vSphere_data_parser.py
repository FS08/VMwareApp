import xml.etree.ElementTree as ET

# def to Parse the ESXi Hosts data
def parse_host_data():
    tree = ET.parse('C:\\vSphereData\\vSphere_host_Data.xml')
    root = tree.getroot()

    host_objects = []

    for obj in root.findall('Object'):
        properties = obj.findall('Property')
        host_info = {}
        for prop in properties:
            name = prop.get('Name')
            value = prop.text
            host_info[name] = value
        # Append the property dictionary to the list of objects
        host_objects.append(host_info)

    # Now vm_objects list contains dictionaries representing each object
    # Each dictionary has keys for property names and values for property values

    #print(host_objects)
    #print(len(host_objects))

    for host_info in host_objects:
        Host_Name = host_info['Name']
        # print("Name:", Host_Name)

        Host_State = host_info['ConnectionState']
        # print("State:", Host_State)

        Host_Power = host_info['PowerState']
        # print("Power:", Host_Power)

        Host_Cpu = host_info['NumCpu']
        # print("N° CPU:", Host_Cpu)

        Host_MemoryUsage = host_info['MemoryUsageGB']
        # print("Memory Usage GB:", Host_MemoryUsage)

        Host_MemoryTotal = host_info['MemoryTotalGB']
        # print("Memory Total GB:", Host_MemoryTotal)

        # print("--------------------")  # Separator between objects

    return host_objects

def parse_vm_data():
    tree = ET.parse('C:\\vSphereData\\vSphere_vm_Data.xml')
    root = tree.getroot()

    vm_objects = []

    for obj in root.findall('Object'):
        properties = obj.findall('Property')
        vm_info = {}
        for prop in properties:
            name = prop.get('Name')
            value = prop.text
            vm_info[name] = value
        # Append the property dictionary to the list of objects
        vm_objects.append(vm_info)

    # Now vm_objects list contains dictionaries representing each object
    # Each dictionary has keys for property names and values for property values
    #print(host_objects)

    for vm_info in vm_objects:
        vm_Name = vm_info['Name']
        # print("Name:", vm_Name)

        vm_Power = vm_info['PowerState']
        # print("Power:", vm_Power)

        vm_MemoryUsage = vm_info['MemoryGB']
        # print("Memory:", vm_MemoryUsage)

        vm_Cpu = vm_info['NumCPU']
        # print("N° CPU:", vm_Cpu)

        vm_VLAN = vm_info['VLAN']
        # print("VLAN:", vm_VLAN)

        vm_ip = vm_info['IPAddress']
        # print("IP Address:", vm_ip)

        vm_Storage = vm_info['Storage']
        # print("Storage:", vm_Storage)

        vm_OverallStatus = vm_info['OverallStatus']
        # print("Overall Status:", vm_OverallStatus)

        # print("--------------------")  # Separator between objects

    return vm_objects
