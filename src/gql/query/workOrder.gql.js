import gql from 'graphql-tag';

export const UPDATE_WORK_ORDER = gql`
  mutation updateSite($id: ID!, $comments: String) {
    updateSite(id: $id, comments: $comments) {
      id
    }
  }
`;

export const GET_WORK_ORDER = gql`
  query workOrder($id: ID!) {
    workOrder(id: $id) {
      id
      assignedDate
      billingAddress
      comments
      dateIssued
      estimatedTime
      items
      jobDescription
      panelType
      phoneNumber
      requestedBy
      siteAddress
      tax
      technician
      woNumber
      completed
      siteId
    }
  }
`;
