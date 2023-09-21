#!/bin/bash

directory="./apps"
output_file_base="./codebase/content"
output_file_suffix=".md"
current_file_number=1
current_line_count=0
max_lines=400
window=40  # Define a window of +-40 lines
log_file="./codebase/script_log.txt"

# Initialize statistics
total_files_processed=0
total_word_count_before=0
total_word_count_after=0
initial_file_count=$(ls "${output_file_base}_*" 2>/dev/null | wc -l)

# Logging function
log() {
    echo "$(date): $1" | tee -a "$log_file"
}

# Determine the filename for the current output based on the file number
current_output_file="${output_file_base}_${current_file_number}${output_file_suffix}"

# Clean codebase directory
log "Initial number of files in the output directory: $initial_file_count"
log "Cleaning up the codebase directory..."
rm "${output_file_base}_*" 2>/dev/null  # Delete old output files

# Filters
filters=(
    ! -name "*.package-lock"
    ! -path "*/.devcontainer/*"
    ! -path "*/dump/*"
    ! -name "*.DS_Store"
    ! -name "*.pyc"
    ! -path "*/node_modules/*"
    ! -path "*/.next/*"
    ! -path "*/fonts/*"

    ! -name ".env*"
    ! -name "*.jpg"
    ! -name "*.png"
    ! -name "*.gif"


    ! -name "*.css*"
    ! -name "*.lock*"

    ! -name ".git*"
    ! -path "*/.git/*"
    ! -path "*/cert/*"

)



# Process files based on filters
find "$directory" -type f "${filters[@]}" -print0 | while IFS= read -r -d '' file; do
    
# Determine the origin directory of the file
    if [[ $file == "./apps/client"* ]]; then
        current_output_dir="./codebase/client"
    elif [[ $file == "./apps/backend"* ]]; then
        current_output_dir="./codebase/backend"
    else
        current_output_dir="./codebase/other"
    fi

# Create directory if it doesn't exist
    mkdir -p "$current_output_dir"
        # Adjust the output_file_base accordingly
    current_output_base="${current_output_dir}/content"

 # Continue processing with adjusted base
    # current_output_file="${current_output_base}_${current_file_number}${output_file_suffix}"
    log "Processing file: $file Encoder:$current_output_file"


    file_lines=$(wc -l < "$file")
    file_words=$(wc -w < "$file")
    total_files_processed=$((total_files_processed + 1))
    total_word_count_before=$((total_word_count_before + file_words))

    file_lines=$((file_lines + 2)) # 2 extra lines for the header and separator

    remaining_lines=$((max_lines - current_line_count))
    
    # Check if remaining lines are within the window and adding this file would exceed the window
    if (( remaining_lines <= window && current_line_count + file_lines > max_lines )); then
        current_line_count=0
        ((current_file_number++))
        current_output_file="${current_output_base}_${current_file_number}${output_file_suffix}"
    fi

    cat "$file" >> "$current_output_file"
    echo "--------------------------------------------------" >> "$current_output_file"
    
    current_line_count=$((current_line_count + file_lines))
    total_word_count_after=$((total_word_count_after + file_words))
done < <(find "$directory" -type f "${filters[@]}" -print0)


# Log statistics
log "Directory structure and file content have been saved to '${output_file_base}_*' files."
log "Total word count before: $total_word_count_before"
log "Total word count after: $total_word_count_after"
log "Total output files generated: $current_file_number"
log "Total files processed: $total_files_processed"
log "Difference in files (Processed - Initial): $((total_files_processed - initial_file_count))"

# Generate a tree based on filters
log "Generating project tree..."
# find "$directory" "${filters[@]}" | tee "${output_file_base}_tree.txt" 2>/dev/null 
# find "$directory" "${filters[@]}" -print | tree | tee "${output_file_base}_tree.txt" 2>/dev/null 
# find "$directory" "${filters[@]}" -print
find "$directory" \( \
    -name "*.package-lock" \
    -o -path "*/.devcontainer/*" \
    -o -path "*/dump/*" \
    -o -name "*.DS_Store" \
    -o -name "*.pyc" \
    -o -path "*/node_modules/*" \
    -o -path "*/.next/*" \
    -o -path "*/fonts/*" \
    -o -name ".env*" \
    -o -name "*.jpg" \
    -o -name "*.png" \
    -o -name "*.gif" \
    -o -name "*.css*" \
    -o -name "*.lock*" \
    -o -name ".git*" \
    -o -path "*/.git/*" \
    -o -path "*/cert/*" \
\) -prune -o -print | tree --fromfile | tee "${output_file_base}_tree.txt" 2>/dev/null 
