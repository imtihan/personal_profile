#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
COMPANY_DIR="$ROOT_DIR/assets/logos/companies"
TECH_DIR="$ROOT_DIR/assets/logos/tech"

mkdir -p "$COMPANY_DIR" "$TECH_DIR"

fetch() {
  local url="$1"
  local out="$2"
  curl -L --fail --silent --show-error "$url" -o "$out"
  echo "Fetched: $out"
}

# Company logos
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pinterest.svg" "$COMPANY_DIR/pinterest.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mozilla.svg" "$COMPANY_DIR/mozilla.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/meta.svg" "$COMPANY_DIR/meta.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/wish.svg" "$COMPANY_DIR/wish.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/academia.svg" "$COMPANY_DIR/utoronto.svg"
fetch "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/ibm.svg" "$COMPANY_DIR/ibm.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg" "$COMPANY_DIR/cisco.svg"

# Tech logos
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg" "$TECH_DIR/python.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openjdk.svg" "$TECH_DIR/java.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cplusplus.svg" "$TECH_DIR/cplusplus.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg" "$TECH_DIR/sql.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pytorch.svg" "$TECH_DIR/pytorch.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tensorflow.svg" "$TECH_DIR/tensorflow.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg" "$TECH_DIR/jax.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/scikitlearn.svg" "$TECH_DIR/scikitlearn.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huggingface.svg" "$TECH_DIR/transformers.svg"
fetch "https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png" "$TECH_DIR/xgboost.png"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ray.svg" "$TECH_DIR/ray.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg" "$TECH_DIR/kubernetes.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachespark.svg" "$TECH_DIR/spark.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apacheairflow.svg" "$TECH_DIR/airflow.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/langchain.svg" "$TECH_DIR/langchain.svg"
fetch "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachekafka.svg" "$TECH_DIR/kafka.svg"

echo "Done. Logo assets available under assets/logos/."
