// State Insurance Requirements Data
// Auto liability minimums, required coverages, and regulatory info

export interface StateRequirements {
  stateCode: string;
  state: string;
  autoInsurance: {
    minimumLiability: {
      bodilyInjuryPerPerson: number;
      bodilyInjuryPerAccident: number;
      propertyDamage: number;
      format: string; // e.g., "25/50/25"
    };
    requiredCoverages: string[];
    optionalCoverages: string[];
    noFaultState: boolean;
    pipRequired: boolean;
    umUimRequired: boolean;
  };
  licensing: {
    regulatoryBody: string;
    regulatoryUrl: string;
    licenseTypes: string[];
    ceRequiredHours: number;
    ceRenewalPeriod: string;
    eoInsuranceRequired: boolean;
    residencyRequired: boolean;
    examRequired: boolean;
    backgroundCheckRequired: boolean;
    fingerprintRequired: boolean;
  };
  consumers: {
    gracePeriodsDay: number;
    cancellationNoticeDays: number;
    freeQuoteLookPeriodDays: number;
    complaintsUrl: string;
  };
}

export const stateRequirements: Record<string, StateRequirements> = {
  AL: {
    stateCode: 'AL',
    state: 'Alabama',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Alabama Department of Insurance',
      regulatoryUrl: 'https://www.aldoi.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: true
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 20,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.aldoi.gov/Consumers/FileComplaint.aspx'
    }
  },
  AK: {
    stateCode: 'AK',
    state: 'Alaska',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 50000,
        bodilyInjuryPerAccident: 100000,
        propertyDamage: 25000,
        format: '50/100/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Alaska Division of Insurance',
      regulatoryUrl: 'https://www.commerce.alaska.gov/web/ins/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 20,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.commerce.alaska.gov/web/ins/Consumers.aspx'
    }
  },
  AZ: {
    stateCode: 'AZ',
    state: 'Arizona',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 15000,
        format: '25/50/15'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Arizona Department of Insurance and Financial Institutions',
      regulatoryUrl: 'https://difi.az.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: true
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://difi.az.gov/consumers/file-complaint'
    }
  },
  AR: {
    stateCode: 'AR',
    state: 'Arkansas',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Arkansas Insurance Department',
      regulatoryUrl: 'https://insurance.arkansas.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.arkansas.gov/consumer-services/'
    }
  },
  CA: {
    stateCode: 'CA',
    state: 'California',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 15000,
        bodilyInjuryPerAccident: 30000,
        propertyDamage: 5000,
        format: '15/30/5'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'California Department of Insurance',
      regulatoryUrl: 'https://www.insurance.ca.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: true
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 60,
      complaintsUrl: 'https://www.insurance.ca.gov/01-consumers/101-help/'
    }
  },
  CO: {
    stateCode: 'CO',
    state: 'Colorado',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 15000,
        format: '25/50/15'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Colorado Division of Insurance',
      regulatoryUrl: 'https://doi.colorado.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://doi.colorado.gov/for-consumers/file-a-complaint'
    }
  },
  CT: {
    stateCode: 'CT',
    state: 'Connecticut',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Connecticut Insurance Department',
      regulatoryUrl: 'https://portal.ct.gov/cid',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://portal.ct.gov/cid/Consumer/Consumer-Assistance'
    }
  },
  DE: {
    stateCode: 'DE',
    state: 'Delaware',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 10000,
        format: '25/50/10'
      },
      requiredCoverages: ['Liability', 'PIP'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Delaware Department of Insurance',
      regulatoryUrl: 'https://insurance.delaware.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.delaware.gov/services/consumercomplaint/'
    }
  },
  FL: {
    stateCode: 'FL',
    state: 'Florida',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 10000,
        bodilyInjuryPerAccident: 20000,
        propertyDamage: 10000,
        format: '10/20/10 (PIP)'
      },
      requiredCoverages: ['PIP', 'Property Damage Liability'],
      optionalCoverages: ['Bodily Injury Liability', 'Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Florida Office of Insurance Regulation',
      regulatoryUrl: 'https://www.floir.com',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: true
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 45,
      freeQuoteLookPeriodDays: 14,
      complaintsUrl: 'https://www.myfloridacfo.com/division/consumers/needourhelp.htm'
    }
  },
  GA: {
    stateCode: 'GA',
    state: 'Georgia',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Georgia Office of Insurance and Safety Fire Commissioner',
      regulatoryUrl: 'https://oci.georgia.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://oci.georgia.gov/consumers/file-complaint'
    }
  },
  HI: {
    stateCode: 'HI',
    state: 'Hawaii',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 20000,
        bodilyInjuryPerAccident: 40000,
        propertyDamage: 10000,
        format: '20/40/10 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Hawaii Insurance Division',
      regulatoryUrl: 'https://cca.hawaii.gov/ins/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://cca.hawaii.gov/ins/consumer/'
    }
  },
  ID: {
    stateCode: 'ID',
    state: 'Idaho',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 15000,
        format: '25/50/15'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Idaho Department of Insurance',
      regulatoryUrl: 'https://doi.idaho.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://doi.idaho.gov/consumer-assistance/file-a-complaint/'
    }
  },
  IL: {
    stateCode: 'IL',
    state: 'Illinois',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 20000,
        format: '25/50/20'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Illinois Department of Insurance',
      regulatoryUrl: 'https://insurance.illinois.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 30,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.illinois.gov/complaints.html'
    }
  },
  IN: {
    stateCode: 'IN',
    state: 'Indiana',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Indiana Department of Insurance',
      regulatoryUrl: 'https://www.in.gov/idoi/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.in.gov/idoi/2547.htm'
    }
  },
  IA: {
    stateCode: 'IA',
    state: 'Iowa',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 20000,
        bodilyInjuryPerAccident: 40000,
        propertyDamage: 15000,
        format: '20/40/15'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Iowa Insurance Division',
      regulatoryUrl: 'https://iid.iowa.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 36,
      ceRenewalPeriod: '3 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://iid.iowa.gov/consumers'
    }
  },
  KS: {
    stateCode: 'KS',
    state: 'Kansas',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'PIP'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Kansas Insurance Department',
      regulatoryUrl: 'https://insurance.kansas.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.kansas.gov/consumers/'
    }
  },
  KY: {
    stateCode: 'KY',
    state: 'Kentucky',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Kentucky Department of Insurance',
      regulatoryUrl: 'https://insurance.ky.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.ky.gov/consumer.aspx'
    }
  },
  LA: {
    stateCode: 'LA',
    state: 'Louisiana',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 15000,
        bodilyInjuryPerAccident: 30000,
        propertyDamage: 25000,
        format: '15/30/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Louisiana Department of Insurance',
      regulatoryUrl: 'https://www.ldi.la.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.ldi.la.gov/consumers/file-a-complaint'
    }
  },
  ME: {
    stateCode: 'ME',
    state: 'Maine',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 50000,
        bodilyInjuryPerAccident: 100000,
        propertyDamage: 25000,
        format: '50/100/25'
      },
      requiredCoverages: ['Liability', 'Uninsured/Underinsured Motorist', 'Medical Payments'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Maine Bureau of Insurance',
      regulatoryUrl: 'https://www.maine.gov/pfr/insurance/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.maine.gov/pfr/insurance/consumer/complaint.html'
    }
  },
  MD: {
    stateCode: 'MD',
    state: 'Maryland',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 30000,
        bodilyInjuryPerAccident: 60000,
        propertyDamage: 15000,
        format: '30/60/15'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist', 'PIP'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: false,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Maryland Insurance Administration',
      regulatoryUrl: 'https://insurance.maryland.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 45,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.maryland.gov/Consumer/Pages/FileaComplaint.aspx'
    }
  },
  MA: {
    stateCode: 'MA',
    state: 'Massachusetts',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 20000,
        bodilyInjuryPerAccident: 40000,
        propertyDamage: 5000,
        format: '20/40/5 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Massachusetts Division of Insurance',
      regulatoryUrl: 'https://www.mass.gov/orgs/division-of-insurance',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 45,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.mass.gov/how-to/file-a-consumer-complaint-about-an-insurance-company'
    }
  },
  MI: {
    stateCode: 'MI',
    state: 'Michigan',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 50000,
        bodilyInjuryPerAccident: 100000,
        propertyDamage: 10000,
        format: '50/100/10 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP', 'Property Protection'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Michigan Department of Insurance and Financial Services',
      regulatoryUrl: 'https://www.michigan.gov/difs',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.michigan.gov/difs/consumers/file-a-complaint'
    }
  },
  MN: {
    stateCode: 'MN',
    state: 'Minnesota',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 30000,
        bodilyInjuryPerAccident: 60000,
        propertyDamage: 10000,
        format: '30/60/10 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Minnesota Department of Commerce',
      regulatoryUrl: 'https://mn.gov/commerce/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://mn.gov/commerce/consumers/file-a-complaint/'
    }
  },
  MS: {
    stateCode: 'MS',
    state: 'Mississippi',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Mississippi Insurance Department',
      regulatoryUrl: 'https://www.mid.ms.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.mid.ms.gov/consumers/complaint.aspx'
    }
  },
  MO: {
    stateCode: 'MO',
    state: 'Missouri',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Missouri Department of Commerce and Insurance',
      regulatoryUrl: 'https://insurance.mo.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.mo.gov/consumers/'
    }
  },
  MT: {
    stateCode: 'MT',
    state: 'Montana',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 20000,
        format: '25/50/20'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Montana Commissioner of Securities and Insurance',
      regulatoryUrl: 'https://csimt.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://csimt.gov/consumers/'
    }
  },
  NE: {
    stateCode: 'NE',
    state: 'Nebraska',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Nebraska Department of Insurance',
      regulatoryUrl: 'https://doi.nebraska.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://doi.nebraska.gov/consumer/file-complaint'
    }
  },
  NV: {
    stateCode: 'NV',
    state: 'Nevada',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 20000,
        format: '25/50/20'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Nevada Division of Insurance',
      regulatoryUrl: 'https://doi.nv.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://doi.nv.gov/Consumers/File_A_Complaint/'
    }
  },
  NH: {
    stateCode: 'NH',
    state: 'New Hampshire',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: [],
      optionalCoverages: ['Liability', 'Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'New Hampshire Insurance Department',
      regulatoryUrl: 'https://www.nh.gov/insurance/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.nh.gov/insurance/consumers/complaint.htm'
    }
  },
  NJ: {
    stateCode: 'NJ',
    state: 'New Jersey',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 15000,
        bodilyInjuryPerAccident: 30000,
        propertyDamage: 5000,
        format: '15/30/5 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'New Jersey Department of Banking and Insurance',
      regulatoryUrl: 'https://www.state.nj.us/dobi/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 60,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.state.nj.us/dobi/consumer.htm'
    }
  },
  NM: {
    stateCode: 'NM',
    state: 'New Mexico',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 10000,
        format: '25/50/10'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'New Mexico Office of Superintendent of Insurance',
      regulatoryUrl: 'https://www.osi.state.nm.us',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.osi.state.nm.us/consumer-assistance/'
    }
  },
  NY: {
    stateCode: 'NY',
    state: 'New York',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 10000,
        format: '25/50/10 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'New York Department of Financial Services',
      regulatoryUrl: 'https://www.dfs.ny.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 15,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: true
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 60,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.dfs.ny.gov/consumers/file_complaint'
    }
  },
  NC: {
    stateCode: 'NC',
    state: 'North Carolina',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 30000,
        bodilyInjuryPerAccident: 60000,
        propertyDamage: 25000,
        format: '30/60/25'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'North Carolina Department of Insurance',
      regulatoryUrl: 'https://www.ncdoi.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.ncdoi.gov/consumers/file-complaint'
    }
  },
  ND: {
    stateCode: 'ND',
    state: 'North Dakota',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'North Dakota Insurance Department',
      regulatoryUrl: 'https://www.insurance.nd.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.insurance.nd.gov/consumer/file-complaint'
    }
  },
  OH: {
    stateCode: 'OH',
    state: 'Ohio',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Ohio Department of Insurance',
      regulatoryUrl: 'https://insurance.ohio.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.ohio.gov/consumers/file-a-complaint'
    }
  },
  OK: {
    stateCode: 'OK',
    state: 'Oklahoma',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Oklahoma Insurance Department',
      regulatoryUrl: 'https://www.oid.ok.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.oid.ok.gov/consumers/file-a-complaint/'
    }
  },
  OR: {
    stateCode: 'OR',
    state: 'Oregon',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 20000,
        format: '25/50/20'
      },
      requiredCoverages: ['Liability', 'PIP', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive'],
      noFaultState: false,
      pipRequired: true,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Oregon Division of Financial Regulation',
      regulatoryUrl: 'https://dfr.oregon.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://dfr.oregon.gov/consumers/file-complaint'
    }
  },
  PA: {
    stateCode: 'PA',
    state: 'Pennsylvania',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 15000,
        bodilyInjuryPerAccident: 30000,
        propertyDamage: 5000,
        format: '15/30/5'
      },
      requiredCoverages: ['Liability', 'Medical Benefits'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Pennsylvania Insurance Department',
      regulatoryUrl: 'https://www.insurance.pa.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.insurance.pa.gov/Consumers/File%20a%20Complaint/'
    }
  },
  RI: {
    stateCode: 'RI',
    state: 'Rhode Island',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Rhode Island Department of Business Regulation',
      regulatoryUrl: 'https://dbr.ri.gov/divisions/insurance/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://dbr.ri.gov/divisions/insurance/consumers/'
    }
  },
  SC: {
    stateCode: 'SC',
    state: 'South Carolina',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'South Carolina Department of Insurance',
      regulatoryUrl: 'https://doi.sc.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://doi.sc.gov/consumers/file-a-complaint'
    }
  },
  SD: {
    stateCode: 'SD',
    state: 'South Dakota',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'South Dakota Division of Insurance',
      regulatoryUrl: 'https://dlr.sd.gov/insurance/',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://dlr.sd.gov/insurance/consumers/'
    }
  },
  TN: {
    stateCode: 'TN',
    state: 'Tennessee',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 15000,
        format: '25/50/15'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Tennessee Department of Commerce and Insurance',
      regulatoryUrl: 'https://www.tn.gov/commerce/insurance.html',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.tn.gov/commerce/consumer-resources/file-a-complaint.html'
    }
  },
  TX: {
    stateCode: 'TX',
    state: 'Texas',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 30000,
        bodilyInjuryPerAccident: 60000,
        propertyDamage: 25000,
        format: '30/60/25'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist', 'PIP'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Texas Department of Insurance',
      regulatoryUrl: 'https://www.tdi.texas.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: true
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.tdi.texas.gov/consumer/complfrm.html'
    }
  },
  UT: {
    stateCode: 'UT',
    state: 'Utah',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 65000,
        propertyDamage: 15000,
        format: '25/65/15 (PIP)'
      },
      requiredCoverages: ['Liability', 'PIP'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Uninsured Motorist'],
      noFaultState: true,
      pipRequired: true,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Utah Insurance Department',
      regulatoryUrl: 'https://insurance.utah.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://insurance.utah.gov/consumer/file-a-complaint'
    }
  },
  VT: {
    stateCode: 'VT',
    state: 'Vermont',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 10000,
        format: '25/50/10'
      },
      requiredCoverages: ['Liability', 'Uninsured/Underinsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Vermont Department of Financial Regulation',
      regulatoryUrl: 'https://dfr.vermont.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://dfr.vermont.gov/consumers/file-a-complaint'
    }
  },
  VA: {
    stateCode: 'VA',
    state: 'Virginia',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 30000,
        bodilyInjuryPerAccident: 60000,
        propertyDamage: 20000,
        format: '30/60/20'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Virginia Bureau of Insurance',
      regulatoryUrl: 'https://www.scc.virginia.gov/pages/Bureau-of-Insurance',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 45,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.scc.virginia.gov/pages/BOI-Consumer-Complaint-Forms'
    }
  },
  WA: {
    stateCode: 'WA',
    state: 'Washington',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 10000,
        format: '25/50/10'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist', 'PIP'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Washington Office of the Insurance Commissioner',
      regulatoryUrl: 'https://www.insurance.wa.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 45,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.insurance.wa.gov/file-complaint-or-check-your-complaint-status'
    }
  },
  WV: {
    stateCode: 'WV',
    state: 'West Virginia',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 25000,
        format: '25/50/25'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'West Virginia Offices of the Insurance Commissioner',
      regulatoryUrl: 'https://www.wvinsurance.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://www.wvinsurance.gov/Consumers/File-a-Complaint'
    }
  },
  WI: {
    stateCode: 'WI',
    state: 'Wisconsin',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 10000,
        format: '25/50/10'
      },
      requiredCoverages: ['Liability', 'Uninsured Motorist'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: true
    },
    licensing: {
      regulatoryBody: 'Wisconsin Office of the Commissioner of Insurance',
      regulatoryUrl: 'https://oci.wi.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://oci.wi.gov/Pages/Consumers/FileAComplaint.aspx'
    }
  },
  WY: {
    stateCode: 'WY',
    state: 'Wyoming',
    autoInsurance: {
      minimumLiability: {
        bodilyInjuryPerPerson: 25000,
        bodilyInjuryPerAccident: 50000,
        propertyDamage: 20000,
        format: '25/50/20'
      },
      requiredCoverages: ['Liability'],
      optionalCoverages: ['Collision', 'Comprehensive', 'Medical Payments', 'Uninsured Motorist'],
      noFaultState: false,
      pipRequired: false,
      umUimRequired: false
    },
    licensing: {
      regulatoryBody: 'Wyoming Department of Insurance',
      regulatoryUrl: 'https://doi.wyo.gov',
      licenseTypes: ['Property & Casualty', 'Life & Health', 'Personal Lines'],
      ceRequiredHours: 24,
      ceRenewalPeriod: '2 years',
      eoInsuranceRequired: false,
      residencyRequired: false,
      examRequired: true,
      backgroundCheckRequired: true,
      fingerprintRequired: false
    },
    consumers: {
      gracePeriodsDay: 10,
      cancellationNoticeDays: 30,
      freeQuoteLookPeriodDays: 10,
      complaintsUrl: 'https://doi.wyo.gov/consumers/file-a-complaint'
    }
  }
};

// Helper to get state by code
export function getStateRequirements(stateCode: string): StateRequirements | undefined {
  return stateRequirements[stateCode.toUpperCase()];
}

// Get all states as array
export function getAllStateRequirements(): StateRequirements[] {
  return Object.values(stateRequirements);
}

// No-fault states list
export function getNoFaultStates(): StateRequirements[] {
  return Object.values(stateRequirements).filter(s => s.autoInsurance.noFaultState);
}

// States requiring UM/UIM
export function getUmUimRequiredStates(): StateRequirements[] {
  return Object.values(stateRequirements).filter(s => s.autoInsurance.umUimRequired);
}
