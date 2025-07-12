import { Input, NativeSelect } from "@mantine/core";
import Link from "next/link";
import type { CallingResultItem, CompanyInfo } from "../types";
import { TableCell } from "./_components/table-cell";
import { TableHeader } from "./_components/table-header";

interface DashboardProps {
	callingResult: CallingResultItem[];
	companies: CompanyInfo[];
}

const Dashboard = ({ callingResult, companies }: DashboardProps) => {
	// データを NativeSelect 用の形式に変換
	const selectData =
		callingResult?.map((item) => ({
			value: item.id.toString(),
			label: item.name,
		})) || [];

	const displayCompanies = companies && companies.length > 0 ? companies : [];

	return (
		<div>
			{/* フィルター部分 */}
			<div className="flex flex-wrap gap-4 py-4 bg-sky-300 items-center justify-center mx-auto">
				<NativeSelect
					data={[{ value: "", label: "架電結果" }, ...selectData]}
					w={150}
				/>
				<Input placeholder="会社名" w={150} />
				<Input placeholder="電話番号" w={150} />
				<Input placeholder="業界" w={150} />
				<Input placeholder="営業担当" w={150} />
				<Input placeholder="次回架電日" w={150} />
			</div>

			{/* テーブル部分 */}
			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr>
						<TableHeader>架電結果</TableHeader>
						<TableHeader>営業担当者</TableHeader>
						<TableHeader>次回予定日</TableHeader>
						<TableHeader>会社名</TableHeader>
						<TableHeader>住所</TableHeader>
						<TableHeader>電話番号</TableHeader>
						<TableHeader>業界</TableHeader>
						<TableHeader>名前</TableHeader>
						<TableHeader>部署</TableHeader>
						<TableHeader>特記事項</TableHeader>
					</tr>
				</thead>
				<tbody>
					{displayCompanies.map((company, index) => (
						<tr
							key={company.company_id}
							className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
						>
							<TableCell>-</TableCell>
							<TableCell>-</TableCell>
							<TableCell>-</TableCell>
							<TableCell isBlue>
								<Link
									href={`/attacklog?company_id=${company.company_id}`}
									className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
								>
									{company.company_name}
								</Link>
							</TableCell>
							<TableCell>{company.address}</TableCell>
							<TableCell>
								{company.registered_phone_number ||
									company.key_person_phone_number}
							</TableCell>
							<TableCell>{company.department_name}</TableCell>
							<TableCell>{company.key_person_name}</TableCell>
							<TableCell>{company.department_name}</TableCell>
							<TableCell>{company.key_person_note}</TableCell>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
