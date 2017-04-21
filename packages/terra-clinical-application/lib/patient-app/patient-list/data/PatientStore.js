'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var patientListData = {
  physician1: [{
    id: '0',
    name: 'Tom',
    status: 'Admitted',
    comment: 'Call me Ishmael',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kurt_Russell_1974.JPG/220px-Kurt_Russell_1974.JPG'
  }, {
    id: '1',
    name: 'Mike',
    status: 'Admitted',
    comment: 'It was a bright cold day in April, and the clocks were striking thirteen',
    photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2RmZThlN2ItNDczZC00MTI0LTlhZGItNjFiNmIzMTJiODM1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_.jpg'
  }, {
    id: '2',
    name: 'Harry',
    status: 'Discharged',
    comment: 'Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show',
    photo: 'https://s-media-cache-ak0.pinimg.com/236x/74/6e/9e/746e9ef43b23d9658f80c3b8c24862fb.jpg'
  }, {
    id: '3',
    name: 'Sue',
    status: 'Discharged',
    comment: 'The sky above the port was the color of television, tuned to a dead channel',
    photo: 'http://2.bp.blogspot.com/-Mz5oF3dgHyU/TrXJCDSO30I/AAAAAAAAJ1s/9hICRzC8cF8/s400/ishot-141.jpg'
  }, {
    id: '4',
    name: 'James',
    status: 'Discharged',
    comment: 'All this happened, more or less',
    photo: 'https://s-media-cache-ak0.pinimg.com/originals/c5/08/ae/c508ae4dd545910c3e1c1b24a8b5f344.jpg'
  }, {
    id: '5',
    name: 'Andrea',
    status: 'Discharged',
    comment: 'It was a pleasure to burn',
    photo: 'http://brothers-ink.com/wp-content/uploads/2017/03/tombstone.jpg'
  }, {
    id: '6',
    name: 'Ryan',
    status: 'Discharged',
    comment: 'It was love at first sight',
    photo: 'http://ll-media.tmz.com/2015/04/01/0401-kurt-russell-moustache-close-photos-01-1200x630.jpg'
  }, {
    id: '7',
    name: 'Dave',
    status: 'Discharged',
    comment: 'Time is not a line but a dimension, like the dimensions of space',
    photo: 'http://static-sailmagazine.s3.amazonaws.com/wp-content/uploads/2015/09/RonPortlight1.jpg'
  }]
};

var listeners = [];

var copy = function copy(object) {
  return JSON.parse(JSON.stringify(object));
};

var PatientStore = {
  getPatientList: function getPatientList(physicianId) {
    return copy(patientListData[physicianId]);
  },
  getPatient: function getPatient(physicianId, patientId) {
    return copy(patientListData[physicianId]).find(function (patient) {
      return patient.id === patientId;
    });
  },
  update: function update(physicianId, patientId, data) {
    var patientList = patientListData[physicianId];
    var patientToUpdate = patientList.find(function (patient) {
      return patient.id === patientId;
    });

    if (data.name) {
      patientToUpdate.name = data.name;
    }

    if (data.status) {
      patientToUpdate.status = data.status;
    }

    if (data.comment) {
      patientToUpdate.comment = data.comment;
    }

    listeners.map(function (listener) {
      return listener();
    });
  },
  subscribe: function subscribe(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter(function (l) {
        return l !== listener;
      });
    };
  }
};

exports.default = PatientStore;