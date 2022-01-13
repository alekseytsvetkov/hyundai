export interface RenderEventItemProps {
  item: TEvent;
}

export type TEvent = {
  id: string;
  type: string; // Enum
  actor: any; // TActor
  repo: any; // TRepo
  payload: any; // TPayload
  public: boolean;
  created_at: string;
};
