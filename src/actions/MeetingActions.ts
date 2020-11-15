import { callInternalAPI } from "&server/utils/ActionUtils";
import { HttpMethod } from "&server/models/HttpMethod";
import urls from "&utils/urls";
import { Availability } from "&server/models/Availability";
import { DateTime } from "luxon";
import { Meeting } from "&server/models/Meeting";

const meetingRoute = urls.api.meeting;

export async function getMeetingById(objectId: string): Promise<Meeting> {
  const response: Record<string, any> = await callInternalAPI(
    meetingRoute + `?id=${objectId}`,
    HttpMethod.GET
  );
  return meetingFromJsonResponse(response);
}

export async function getMeetingByApplicationId(
  objectId: string
): Promise<Meeting> {
  const response: Record<string, any> = await callInternalAPI(
    meetingRoute + `?applicationId=${objectId}`,
    HttpMethod.GET
  );
  return meetingFromJsonResponse(response);
}

export async function getMeetings(): Promise<Meeting[]> {
  const response: Record<string, any>[] = await callInternalAPI(
    meetingRoute,
    HttpMethod.GET
  );
  return response.map(meetingFromJsonResponse);
}

export async function createMeeting(meeting: Availability): Promise<Meeting> {
  const response: Record<string, any>[] = await callInternalAPI(
    meetingRoute,
    HttpMethod.PUT,
    {
      meeting,
    }
  );
  return meetingFromJsonResponse(response);
}

export function meetingFromJsonResponse(object: {
  [key: string]: any;
}): Meeting {
  return {
    id: object._id?.toString(),
    interviewer: object.interviewer,
    startDatetime: DateTime.fromISO(object.startDatetime),
    nonprofit: object.nonprofit,
    application: object.application,
    contactName: object.contactName,
    contactPhone: object.contactPhone,
  };
}
