import re

file_path = '/Users/macbook/Desktop/Anti Gravity/Projects/constructech/src/components/Header.tsx'

with open(file_path, 'r') as f:
    content = f.read()

# The blocks to swap
block1_start = content.find('              {/* Our Trades Mega Menu */}')
block1_end = content.find('              {/* Services Mega Menu */}')
block2_start = block1_end
block2_end = content.find('              <Link href="/contact"')

if block1_start != -1 and block1_end != -1 and block2_end != -1:
    block1 = content[block1_start:block1_end]
    block2 = content[block2_start:block2_end]
    
    new_content = content[:block1_start] + block2 + block1 + content[block2_end:]
    
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Successfully swapped.")
else:
    print("Could not find blocks")
