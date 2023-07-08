function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifies = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uZa8QcNVQ/.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}