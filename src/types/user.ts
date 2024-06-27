export type Users = {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
};

export type User = {
  fullName: string;
  tier: string;
  accountBalance: string;
  accountNumber: string;
  bankName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
  education: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  socials: UserSocials;
  guarantor: UserGuarantor;
};

export type UserSocials = {
  twitter: string;
  facebook: string;
  instagram: string;
};

export type UserGuarantor = {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
};

export interface UserDetail {
  profile: UserDetailProfile;
  email: string;
  tier: string;
  rating: number;
  accountBalance: string;
  accountNumber: string;
  bankName: string;
  maritalStatus: string;
  children: string;
  residence: string;
  education: UserDetailEducation;
  socials: UserDetailSocials;
  guarantor: UserDetailGuarantor;
}

export interface UserDetailProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
}

export interface UserDetailEducation {
  level: string;
  sector: string;
  employmentStatus: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

export interface UserDetailSocials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface UserDetailGuarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}
