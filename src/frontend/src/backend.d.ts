import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Appointment {
    id: bigint;
    service: string;
    status: string;
    date: string;
    name: string;
    createdAt: bigint;
    time: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    /**
     * / Book a new appointment. Returns the new appointment ID, or 0 on validation failure.
     */
    bookAppointment(name: string, phone: string, email: string, service: string, date: string, time: string, message: string): Promise<bigint>;
    /**
     * / Cancel an appointment by ID. Returns true on success.
     */
    cancelAppointment(id: bigint): Promise<boolean>;
    /**
     * / Return a single appointment by ID, or null if not found.
     */
    getAppointmentById(id: bigint): Promise<Appointment | null>;
    /**
     * / Return all appointments (admin use).
     */
    getAppointments(): Promise<Array<Appointment>>;
    /**
     * / Update the status of an appointment. Returns true on success.
     */
    updateAppointmentStatus(id: bigint, status: string): Promise<boolean>;
}
