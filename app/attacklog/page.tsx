import { Container, Grid, GridCol, Stack } from "@mantine/core";
import { AttackHistory } from "./attack-history";
import { AttackLogForm } from "./attack-log-form";
import { CompanyInformation } from "./company-info";
import { Header } from "./header";
import { PersonInfo } from "./person-info";
import { createClient } from "@/lib/supabase/server";

const AttackLog = async () => {
	const supabase = await createClient();
	const { data: callingResult } = await supabase.rpc("get_calling_result", {});
	const { data: companies } = await supabase.rpc("get_company_information", {});

	return (
		<Container size="xl" py="lg">
			<Header />

			<Grid mt="xl" gutter="lg">
				<GridCol span={{ base: 12, lg: 6 }}>
					<Stack gap="lg">
						<CompanyInformation companies={companies} />
						<PersonInfo />
						<AttackLogForm callingResult={callingResult || []} />
					</Stack>
				</GridCol>

				<GridCol span={{ base: 12, lg: 6 }}>
					<AttackHistory />
				</GridCol>
			</Grid>
		</Container>
	);
};

export default AttackLog;
