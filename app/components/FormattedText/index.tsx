import styles from './format.module.scss'

export const FormatText = ({ text }:{text:string}) => {
  // Split the text by line breaks
  const lines = text.split(/\r\n|\r|\n/);

  // Split each line by the delimiter (tab or colon) to create key-value pairs
  const keyValuePairs = lines.map(line => {
    const parts = line.split(/\t|:/);
    const key = parts[0];
    const value = parts[1] || ''; // Default to an empty string if value is not present
    return { key, value };
  });

  return (
    <>
      {keyValuePairs.map(({ key, value }, index) => ( 
          <p className={styles.text} key={index}>{key?.trim()}: {value?.trim()}</p>
      ))}
    </>
  );
};

export default FormatText;
