function convert()
{
    var inputValue = document.getElementById("inputValue").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Perform the conversion
    var result;
    if (fromUnit === toUnit)
    {
        result = inputValue;
    } else if (fromUnit === "cm")
    {
        result = convertFromCentimeter(inputValue, toUnit);
    } else if (fromUnit === "m")
    {
        result = convertFromMeter(inputValue, toUnit);
    } else if (fromUnit === "km")
    {
        result = convertFromKilometer(inputValue, toUnit);
    } else if (fromUnit === "in")
    {
        result = convertFromInch(inputValue, toUnit);
    } else if (fromUnit === "ft")
    {
        result = convertFromFoot(inputValue, toUnit);
    } else if (fromUnit === "mi")
    {
        result = convertFromMile(inputValue, toUnit);
    }

    document.getElementById("result").innerHTML = inputValue + " " + fromUnit + " is equal to " + result + " " + toUnit;
}

function convertFromCentimeter(value, toUnit)
{
    switch (toUnit)
    {
        case "m":
            return value / 100;
        case "km":
            return value / 100000;
        case "in":
            return value / 2.54;
        case "ft":
            return value / 30.48;
        case "mi":
            return value / 160934;
        default:
            return value;
    }
}

function convertFromMeter(value, toUnit)
{
    switch (toUnit)
    {
        case "cm":
            return value * 100;
        case "km":
            return value / 1000;
        case "in":
            return value * 39.37;
        case "ft":
            return value * 3.281;
        case "mi":
            return value / 1609;
        default:
            return value;
    }
}

function convertFromKilometer(value, toUnit)
{
    switch (toUnit)
    {
        case "cm":
            return value * 100000;
        case "m":
            return value * 1000;
        case "in":
            return value * 39370;
        case "ft":
            return value * 3281;
        case "mi":
            return value / 1.609;
        default:
            return value;
    }
}

function convertFromInch(value, toUnit)
{
    switch (toUnit)
    {
        case "cm":
            return value * 2.54;
        case "m":
            return value / 39.37;
        case "km":
            return value / 39370;
        case "ft":
            return value / 12;
        case "mi":
            return value / 63360;
        default:
            return value;
    }
}

function convertFromFoot(value, toUnit)
{
    switch (toUnit)
    {
        case "cm":
            return value * 30.48;
        case "m":
            return value / 3.281;
        case "km":
            return value / 3281;
        case "in":
            return value * 12;
        case "mi":
            return value / 5280;
        default:
            return value;
    }
}

function convertFromMile(value, toUnit)
{
    switch (toUnit)
    {
        case "cm":
            return value * 160934;
        case "m":
            return value * 1609;
        case "km":
            return value * 1.609;
        case "in":
            return value * 63360;
        case "ft":
            return value * 5280;
        default:
            return value;
    }
}
