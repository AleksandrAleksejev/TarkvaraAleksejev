function showCalculator(id) {
    var calculators = document.querySelectorAll('.calculator');
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].classList.remove('active');
    }
    var selectedCalculator = document.getElementById(id);
    if (selectedCalculator) {
        selectedCalculator.classList.add('active');
    }
}

function  dateDiv()
{
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
    function dateDiffInDays(dateA, dateB)
    {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
        const utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    var dateA=new Date(document.getElementById("dateA").value);
    var dateB=new Date(document.getElementById("dateB").value);
    var difference = dateDiffInDays(dateA, dateB);
    var answerD=document.getElementById("answerD");

    answerD.innerHTML="Kuupäevade vahe on "+Math.abs(difference)+" päeva";
}
function suveni()
{
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
    function dateDiffInDays2(tana)
    {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(tana.getFullYear(), tana.getMonth(), tana.getDate());
        const utc3 = Date.UTC(tana.getFullYear(), 5, 1);
        var utc2;
        if (((utc3 - utc1) / _MS_PER_DAY)<0)
        {
            utc2 = Date.UTC(tana.getFullYear()+1, 5, 1);
        }
        else
        {
            utc2 = Date.UTC(tana.getFullYear(), 5, 1);
        }

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    var tana=new Date(document.getElementById("tana").value);
    var difference2 = dateDiffInDays2(tana);
    var answerS=document.getElementById("answerS");

    answerS.innerHTML="Enne suve algust "+difference2+" päeva";
}function uusaasta()
{
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
    function dateDiffInDays3(tana)
    {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(tana.getFullYear(), tana.getMonth(), tana.getDate());
        const utc3 = Date.UTC(tana.getFullYear(), 12, 1);
        var utc2;
        if (((utc3 - utc1) / _MS_PER_DAY)<0)
        {
            utc2 = Date.UTC(tana.getFullYear()+1, 12, 1);
        }
        else
        {
            utc2 = Date.UTC(tana.getFullYear(), 12, 1);
        }

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    var tana=new Date(document.getElementById("tana1").value);
    var difference3 = dateDiffInDays3(tana);
    var answerS=document.getElementById("answerB");

    answerS.innerHTML="Kuni uusaasta jäi "+difference3+" päeva";
}

function oppeaastaLopp() {
    var today = new Date(document.getElementById("todaySchool").value);
    var endOfSchool = new Date(today.getFullYear(), 5, 15);

    if (today > endOfSchool) {
        endOfSchool = new Date(today.getFullYear() + 1, 5, 15);
    }

    var diffTime = Math.ceil((endOfSchool - today) / (1000 * 60 * 60 * 24));
    document.getElementById("answerSchool").innerHTML = "Õppeaasta lõpuni on jäänud " + diffTime + " päeva";
}
