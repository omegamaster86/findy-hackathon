export interface CallingResultItem {
	id: number;
	name: string;
}

export interface CompanyInfo {
	company_id: number;
	company_name: string;
	address: string;
	company_website: string;
	registered_phone_number: string;
	department_name: string;
	key_person_name: string;
	key_person_position: string;
	key_person_phone_number: string;
	key_person_email: string;
	key_person_note: string;
	// 実際のデータ構造に合わせて追加
	salse_person: string; // データではsalse_personになっている
	calling_result: string;
	next_calling_day: string; // データではnext_calling_dayになっている
}

export interface AttackLog {
	id: number;
	company_id: number;
	person_id: number;
	attack_date: string;
	attack_result: string;
	attack_note: string;
}
