var txtInput, txtResult;

function initialize() {
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click',
        numberClick, false);
    }
    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);
    document.getElementById('btnMult').addEventListener('click', multClick, false);
    document.getElementById('btnDivision').addEventListener('click', divisionClick, false);
    clear();
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ? this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();

}

function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}

function clearEntry() {
    txtInput.value = '0';
}

function clear()
{
    txtInput.value = '0';
    txtResult.value = '0';
}

function multClick() {
    txtResult.value = Number(txtInput.value) * Number(txtResult.value);
    clearEntry();
}

function divisionClick() {
    txtResult.value = Number(txtResult.value) / Number(txtInput.value);
    clearEntry();
}