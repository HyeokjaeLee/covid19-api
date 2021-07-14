export const covid19Schema = `
    type RegionalData {
      regionEng: String
      regionKor: String
      population: Int
      covid19DataList: [Covid19DataList]
    }

    type Covid19DataList {
      date: String
      confirmed: Confirmed
      quarantine: Quarantine
      recovered: BasicStructure
      dead: BasicStructure
      vaccinated: Vaccinated
      per100kConfirmed: Float
      immunityRatio: Float
    }

    type BasicStructure {
      total: Int
      new: Int
      accumlated: Int
    }

    type Confirmed {
      total: Int
      accumlated: Int
    }

    type Quarantine {
      total: Int
      new: QuarantineNew
    }

    type QuarantineNew {
      total: Int
      domestic: Int
      overseas: Int
    }

    type Vaccinated   {
      first: BasicStructure
      second: BasicStructure
    }
`;
