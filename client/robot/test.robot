*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      https://example.com/
${BROWSER}        Chrome

*** Test Cases ***
Example Website Runs
    ${driverpath}=    Evaluate    webdriver_manager.chrome.ChromeDriverManager().install()    modules=webdriver_manager.chrome
    Open Browser To Example Page
    Example Page Should Be Open
    [Teardown]    Close Browser

*** Keywords ***
Open Browser To Example Page
    ${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${options}    add_argument    --headless
    Call Method    ${options}    add_argument    --no-sandbox
    Call Method    ${options}    add_argument    --disable-dev-shm-usage
    Call Method    ${options}    add_argument    --disable-gpu
    Open Browser    ${LOGIN URL}    ${BROWSER}    options=${options}

Example Page Should Be Open
    Title Should Be    Example Domain