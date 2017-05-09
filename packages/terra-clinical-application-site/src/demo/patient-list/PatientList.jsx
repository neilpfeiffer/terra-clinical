import React, { PropTypes } from 'react';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import List from 'terra-list';
import ContentContainer from 'terra-content-container';
import ClinicalItemView from 'terra-clinical-item-view';
import IconRefresh from 'terra-icon/lib/icon/IconRefresh';
import IconInformation from 'terra-icon/lib/icon/IconInformationInverse';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import AppDelegate from 'terra-clinical-app-delegate';

import NavigationHeader from '../navigation-header/NavigationHeader';
import ActivityOverlay from '../activity-overlay/ActivityOverlay';

let patientListId = 0;

class PatientList extends React.Component {
  constructor(props) {
    super(props);

    this.showPatientDetail = this.showPatientDetail.bind(this);

    this.state = {
      id: patientListId += 1,
    };
  }

  showPatientDetail(patient, type) {
    return () => {
      this.props.onSelectPatientDetail(patient, type);
    };
  }

  render() {
    let loadingIndicator;
    if (this.props.isLoading) {
      loadingIndicator = <ActivityOverlay />;
    }

    const patientList = this.props.patients;

    const patientListItems = [];
    if (patientList && patientList.patients && patientList.patients.length) {
      patientList.patients.forEach((patient) => {
        patientListItems.push((
          <List.Item
            key={patient.id}
            content={
              <ClinicalItemView
                className="orion-ClinicalItemView"
                displays={[
                  <ClinicalItemView.Display text={patient.name} />,
                  <ClinicalItemView.Display text={patient.status} />,
                ]}
                comment={
                  <ClinicalItemView.Comment text={patient.comment} />
                }
                endAccessory={
                  <ButtonGroup>
                    <ButtonGroup.Button onClick={this.showPatientDetail(patient, 'modal')} icon={<IconInformation />} key="MODAL" />
                    <ButtonGroup.Button onClick={this.showPatientDetail(patient, 'panel')} icon={<IconPanelRight />} key="PANEL" />
                  </ButtonGroup>
                }
              />
            }
          />
        ));
      });
    }

    return (
      <ContentContainer
        className="orion-PatientList"
        header={(
          <NavigationHeader title="Patient List" app={this.props.app}>
            {this.props.onRefresh && <Button key="Refresh" onClick={this.props.onRefresh} icon={<IconRefresh isSpin={this.props.isLoading} />} />}
          </NavigationHeader>
        )}
        fill
      >
        {loadingIndicator}
        <List isDivided>
          {patientListItems}
        </List>
      </ContentContainer>
    );
  }
}

PatientList.propTypes = {
  app: AppDelegate.propType,
  patients: PropTypes.object,
  isLoading: PropTypes.bool,
  onRefresh: PropTypes.func,
  onSelectPatientDetail: PropTypes.func,
};

export default PatientList;
