import binascii

class loraNode:
    loraNodeSerialBaud = 115200
    serialLib = 0
    serial_write = None
    serial_read = None
    serLib = None
    abp = "abp"
    otaa = "otaa"
    def __init__(self, region=1):

        if(self.serialLib==0):
            try:
                import serial
                self.serLib = serial.Serial("/dev/ttyUSB0",self.loraNodeSerialBaud)
                self.serial_write = self.serLib.write
                self.serial_read = self.serLib.readline
                self.serialLib = 1
            except:
                print("Error importing Raspberry Pi")
                pass

        if(self.serialLib==0):
            try:
                import uart
                self.serLib = uart
                self.serLib.init(self.loraNodeSerialBaud,tx=14,rx=15)
                self.serial_write = uart.write
                self.serial_read = uart.readline
                self.serialLib=2
            except:
                print("Error importing Microbit")
                pass
        if(self.serialLib==0):
            print("Error! No Serial Library Detected")
        self.reset_radio()
        self.set_spreadingFactor(5)

    def uart_tx(self,command):
        command = "at+%s\r\n" % command
        print(command)
        self.serial_write(str.encode(command))
        line = self.serLib.readline()
        print(line)
    def uart_rx(self):
        """Returns serial data"""

    def set_devAddr(self,devAddr):
        command = "set_config=dev_addr:%s" % devAddr
        self.uart_tx(command)
    def set_devEUI(self,devEui):
        command = "set_config=dev_eui:%s" % devEui
        self.uart_tx(command)
    def set_appEUI(self,appEui):
        command = "set_config=app_eui:%s" % appEui
        self.uart_tx(command)
    def set_appKey(self,appKey):
        command = "set_config=app_key:%s" % appKey
        self.uart_tx(command)
    def set_networkKey(self,nwsk):
        command = "set_config=nwks_key:%s" % nwsk
        self.uart_tx(command)
    def set_appSessionKey(self,apsk):
        command = "set_config=apps_key:%s" % apsk
        self.uart_tx(command)
    def set_loraPower(self,pwr):
        command = "set_config=pwr_level:%s" % pwr
        self.uart_tx(command)
    def set_adrMode(self,adr):
        command = "set_config=adr:%s" % adr
        self.uart_tx(command)
    def set_spreadingFactor(self,sf):
        command = "dr=%s" % sf
        self.uart_tx(command)

    def get_devAddr(self):
        command = "get_config=dev_addr"
        self.uart_tx(command)
    def get_devEUI(self):
        command = "get_config=dev_eui"
        self.uart_tx(command)
    def get_appEUI(self):
        command = "get_config=app_eui"
        self.uart_tx(command)
    def get_appKey(self):
        command = "get_config=app_key"
        self.uart_tx(command)
    def get_networkKey(self):
        command = "get_config=nwks_key"
        self.uart_tx(command)
    def get_appSessionKey(self):
        command = "get_config=apps_key"
        self.uart_tx(command)
    def get_loraPower(self):
        command = "get_config=pwr_level"
        self.uart_tx(command)
    def get_adrMode(self):
        command = "get_config=adr"
        self.uart_tx(command)
    def get_spreadingFactor(self):
        command = "get_config=dr"
        self.uart_tx(command)

    def join(self,mode):

        if(mode==self.abp):
            command = "join=abp"
            self.uart_tx(command)
        elif(mode==self.otaa):
            print("OTAA Not Programmed In Yet")

    def send_raw_packet(self,packet,port):
        """Send raw bytes packet"""
    def send_string_packet(self,string,port=1,pktType=0):
        command = "send=%s,%s,%s" % (pktType, port, binascii.hexlify(string.encode()).decode("utf-8"))
        self.uart_tx(command)
        line = self.serLib.readline()
        print(line)

    def send_int_packet(self,int,port):
        """Send integer packet"""

    def recieve_packet(self):
        """Check To See if there is any response"""

    def reset_radio(self):
        command = "reset=0"
        self.uart_tx(command)
    
    def lora_mode(self,mode):
        """Change between LoRaWAN & LoRaP2P Modes"""
    
    def lora_band(self,band):
        """Set LoRaWAN Region"""


    def gpio_setmode(self,pin,mode):
        """Set Pin GPIO Mode"""
    
    def gpio_read(self,pin):
        """Read RAK811 GPIO"""
    
    def gpio_write(self,pin,state):
        """RAK811 GPIO Write Command"""
    
    def gpio_adc(self,pin):
        """Read RAK811 ADC"""
