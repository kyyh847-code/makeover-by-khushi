import List "mo:core/List";
import Time "mo:core/Time";

actor {

  // ── Types ────────────────────────────────────────────────────────────────

  public type Appointment = {
    id        : Nat;
    name      : Text;
    phone     : Text;
    email     : Text;
    service   : Text;
    date      : Text;
    time      : Text;
    message   : Text;
    status    : Text;   // "pending" | "confirmed" | "cancelled"
    createdAt : Int;
  };

  // ── State ─────────────────────────────────────────────────────────────────

  let appointments = List.empty<Appointment>();
  var nextId : Nat = 1;

  // ── Validation helpers ────────────────────────────────────────────────────

  let validServices : [Text] = [
    "Bridal Makeup",
    "Party & Reception Makeup",
    "Hairstyling & Braiding",
    "Special Effects Makeup",
    "Engagement & Pre-Wedding",
    "Airbrush Makeup",
    "HD & Cinema Makeup",
  ];

  let validTimes : [Text] = [
    "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM",
    "07:00 PM",
  ];

  func isValidService(s : Text) : Bool {
    validServices.find(func(v) { v == s }) != null
  };

  func isValidTime(t : Text) : Bool {
    validTimes.find(func(v) { v == t }) != null
  };

  // ── Public API ────────────────────────────────────────────────────────────

  /// Book a new appointment. Returns the new appointment ID, or 0 on validation failure.
  public func bookAppointment(
    name    : Text,
    phone   : Text,
    email   : Text,
    service : Text,
    date    : Text,
    time    : Text,
    message : Text,
  ) : async Nat {
    if (
      name.size() == 0   or
      phone.size() == 0  or
      service.size() == 0 or
      date.size() == 0   or
      time.size() == 0
    ) { return 0 };

    if (not isValidService(service)) { return 0 };
    if (not isValidTime(time))       { return 0 };

    let id = nextId;
    nextId += 1;

    let appt : Appointment = {
      id;
      name;
      phone;
      email;
      service;
      date;
      time;
      message;
      status    = "pending";
      createdAt = Time.now();
    };

    appointments.add(appt);
    id
  };

  /// Return all appointments (admin use).
  public query func getAppointments() : async [Appointment] {
    appointments.toArray()
  };

  /// Return a single appointment by ID, or null if not found.
  public query func getAppointmentById(id : Nat) : async ?Appointment {
    appointments.find(func(a) { a.id == id })
  };

  /// Update the status of an appointment. Returns true on success.
  public func updateAppointmentStatus(id : Nat, status : Text) : async Bool {
    if (status != "pending" and status != "confirmed" and status != "cancelled") {
      return false
    };
    var found = false;
    appointments.mapInPlace(func(a) {
      if (a.id == id) {
        found := true;
        { a with status }
      } else { a }
    });
    found
  };

  /// Cancel an appointment by ID. Returns true on success.
  public func cancelAppointment(id : Nat) : async Bool {
    var found = false;
    appointments.mapInPlace(func(a) {
      if (a.id == id) {
        found := true;
        { a with status = "cancelled" }
      } else { a }
    });
    found
  };

};
