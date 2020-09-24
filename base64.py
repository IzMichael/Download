import base64
import time

def printMode(mode):
    if mode == '1':
        print("Mode Selected: 1 - Decode")
    elif mode == '2':
        print("Mode Selected: 2 - Encode")

def runMode(mode):
    if mode == '1':
        decode()
    elif mode == '2':
        encode()
    elif mode == '3':
        printAbout()
    elif mode == '9':
        printHelp()

def decode():
    print("Please enter your input:")
    encodedStr = input()
    decodedBytes = base64.urlsafe_b64decode(encodedStr)
    decodedStr = str(decodedBytes, "utf-8")
    print("--")
    print("Processing")
    time.sleep(2)
    print("--")
    print("Your translation is:")
    print(decodedStr)
    pause()

def encode():
    print("Please enter your input:")
    data = input()
    urlSafeEncodedBytes = base64.urlsafe_b64encode(data.encode("utf-8"))
    urlSafeEncodedStr = str(urlSafeEncodedBytes, "utf-8")
    print("--")
    print("Processing")
    time.sleep(2)
    print("--")
    print("Your translation is:")
    print(urlSafeEncodedStr)
    pause()

def pause():
    print("-----")
    input("Press the <ENTER> key to continue...")
    print("-----")
    runProg()

def runProg():
    print("IzMichael's Base64 Translator")
    print("")
    print("Please select a task")
    print("1. Decode")
    print("2. Encode")
    print("3. About")
    print("For Help, please type '9'")
    mode = input()
    time.sleep(1)
    printMode(mode)
    time.sleep(1)
    print("-----")
    runMode(mode)

def printAbout():
    print("This Python script was made by IzMichael")
    print("You can find more of my work at https://izmichael.xyz")
    print("For other useful scripts and programs like this one, visit https://download.izmichael.xyz/tools")
    print("Thanks for using my tool!")
    pause()

def printHelp():
    print("This script will encode and decode base64 text.")
    print("To translate into Base64, use the encode tool")
    print("To translate into English, use the decode tool.")
    pause()


runProg()