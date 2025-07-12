import { Button, Group, Title } from "@mantine/core";
import {
	IconChevronsLeft,
	IconChevronsRight,
	IconX,
} from "@tabler/icons-react";

export const Header = () => {
	return (
		<Group justify="space-between" align="center">
			<Title order={2}>アタックログ</Title>
			<Group gap="sm">
				<Button
					leftSection={<IconChevronsLeft size={18} />}
					variant="light"
					color="green"
				>
					前
				</Button>
				<Button
					leftSection={<IconChevronsRight size={18} />}
					variant="light"
					color="green"
				>
					次
				</Button>
				<Button leftSection={<IconX size={18} />} variant="light" color="green">
					閉
				</Button>
			</Group>
		</Group>
	);
};
