{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('professionalBackground').addEventListener('change', function() \{\
    var professionalSubjectInput = document.getElementById('professionalSubject');\
    if (this.value === 'Yes') \{\
        professionalSubjectInput.style.display = 'block';\
    \} else \{\
        professionalSubjectInput.style.display = 'none';\
    \}\
\});\
\
document.getElementById('previousPreparation').addEventListener('change', function() \{\
    var preparedSubjectInput = document.getElementById('preparedSubject');\
    if (this.value === 'Yes') \{\
        preparedSubjectInput.style.display = 'block';\
    \} else \{\
        preparedSubjectInput.style.display = 'none';\
    \}\
\});\
\
function submitForm() \{\
    var form = document.getElementById('selectionForm');\
    var resultsDiv = document.getElementById('results');\
    var academicBackground = form.academicBackground.value;\
    var interestAreas = form.interestAreas.value;\
    var overlapGS = form.overlapGS.value;\
    var professionalBackground = form.professionalBackground.value;\
    var professionalSubject = form.professionalSubject.value;\
    var scoringPotential = form.scoringPotential.value;\
    var studyMaterialAvailability = form.studyMaterialAvailability.value;\
    var timeCommitment = form.timeCommitment.value;\
    var syllabusLength = form.syllabusLength.value;\
    var previousPreparation = form.previousPreparation.value;\
    var preparedSubject = form.preparedSubject.value;\
    var caseStudiesInterest = form.caseStudiesInterest.value;\
\
    var recommendations = [];\
\
    // Basic logic to suggest optional subjects based on user input\
    if (academicBackground === 'Science') \{\
        recommendations.push('Geography', 'Sociology');\
    \}\
    if (interestAreas === 'Social Sciences') \{\
        recommendations.push('Political Science and International Relations', 'Public Administration');\
    \}\
    if (overlapGS === 'Yes') \{\
        recommendations.push('History', 'Geography');\
    \}\
    if (professionalBackground === 'Yes') \{\
        recommendations.push(professionalSubject);\
    \}\
    if (scoringPotential === 'Very Important') \{\
        recommendations.push('Sociology', 'Anthropology');\
    \}\
    if (studyMaterialAvailability === 'Very Important') \{\
        recommendations.push('Geography', 'History');\
    \}\
    if (timeCommitment === 'Less than 10 hours') \{\
        recommendations.push('Philosophy', 'Public Administration');\
    \}\
    if (syllabusLength === 'Yes') \{\
        recommendations.push('Philosophy');\
    \}\
    if (previousPreparation === 'Yes') \{\
        recommendations.push(preparedSubject);\
    \}\
    if (caseStudiesInterest === 'Yes') \{\
        recommendations.push('Public Administration', 'Political Science and International Relations');\
    \}\
\
    // Remove duplicates from recommendations\
    recommendations = [...new Set(recommendations)];\
\
    resultsDiv.innerHTML = '<h2>Recommended Optional Subjects:</h2>';\
    resultsDiv.innerHTML += '<ul>' + recommendations.map(subject => '<li>' + subject + '</li>').join('') + '</ul>';\
\}\
}